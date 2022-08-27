import { useState, useEffect } from 'react'
import { from } from "rxjs";
import './App.css'

const piGranularity$ = from([0,1,2,3,4]);

function App() {
  const [piProjections, setPiProjections] = useState([]);

  const onPiGranularityChange = (granularity) => {
    console.log(granularity);
  };
    useEffect(() => {
        // To consume an observable, subscribe.
        let subscription = piGranularity$.subscribe((result) => {
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
