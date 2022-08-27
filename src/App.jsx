import { useState, useEffect } from 'react'
import { from, map } from "rxjs";
import './App.css'

const piGranularity$ = from([0,1,2,3,4]);

const piWithGranularity$ = piGranularity$.pipe(
  map((granularity) => {
      const pi = Math.PI.toString();
      const split = pi.split(".");
      const decimals = split[1].slice(0,granularity);
      return split[0] + (decimals.length > 0 ? "." : "") + decimals ;
  }),
);

function App() {
  const [piProjections, setPiProjections] = useState([]);

  const onPiGranularityChange = (granularity) => {
    console.log(granularity);
  };
    useEffect(() => {
        // To consume an observable, subscribe.
        let subscription = piWithGranularity$.subscribe((result) => {
            onPiGranularityChange(result)
        });
        return () => subscription.unsubscribe();
    }, []);

  return (
    <div className="App">
      <h1>RxJS Use Cases</h1>
      <div className="card">
      </div>
        <p>PI projections:</p>
        <div>
            {piProjections.map(pi => <p>{pi}</p>)}
        </div>
    </div>
  )
}

export default App
