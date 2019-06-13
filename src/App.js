import React from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
function App() {
  return (
    <div className="App">
      <div className="App-title">Timers Demo</div>
      <div className="Timers">
        <Stopwatch />
        <Countdown />
      </div>
    </div>
  );
}

export default App;
