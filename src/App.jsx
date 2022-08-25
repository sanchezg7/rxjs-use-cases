import { useState, useEffect } from 'react'
import { from, map } from "rxjs";
import './App.css'
import {piGranularity$} from "./piGranularity.js";

let piGranularityObserver = piGranularity$.pipe(
    map((val) => val)
)

function App() {
  const [piProjections, setPiProjections] = useState([]);

  const onPiGranularityChange = (granularity) => {
    console.log(granularity);
  };
    useEffect(() => {
        // To consume an observable, subscribe.
        let subscription = piGranularityObserver.subscribe((result) => {
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
