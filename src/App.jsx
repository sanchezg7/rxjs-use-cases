import { useState } from 'react'
import './App.css'

function App() {
  const [piProjections, setPiProjections] = useState([]);

  return (
    <div className="App">
      <h1>RxJS Use Cases</h1>
      <div className="card">
      </div>
        <p>Number of digits in PI:</p>
        <div>
            {piProjections.map(pi => <p>{pi}</p>)}
        </div>
    </div>
  )
}

export default App
