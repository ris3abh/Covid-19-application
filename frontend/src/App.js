import gaitonde from './assets/gaitonde.png';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={gaitonde} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.imdb.com/title/tt6077448/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Chaand Pe hai Apun lavdia,  Idhar components call karr Bhosdike
        </a>
      </header>
    </div>
  );
}

export default App;
