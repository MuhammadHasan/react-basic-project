import React from 'react';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello <strong className="myname">hasan</strong></h1>
        <p>
          My first Deployment of react App with surge.
        </p>
        <ul>
          <li>React</li>
          <li>HTML</li>
          <li>Javascript</li>
        </ul>
        <Hello></Hello>
      </header>
    </div>
  );
}

export default App;
