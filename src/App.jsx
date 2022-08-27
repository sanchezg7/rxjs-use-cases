import { useState, useEffect } from 'react'
import './App.css'
import { piWithGranularity$ } from "./piGranularity.js";

function App() {
  const [piProjections, setPiProjections] = useState([]);

  const onPiGranularityChange = (piWithGranularity) => {
    console.log(piWithGranularity);
    setPiProjections((piProjections) => [piWithGranularity, ...piProjections]);
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
            {piProjections.map(pi => <p key={pi}>{pi}</p>)}
        </div>
    </div>
  )
}

export default App
