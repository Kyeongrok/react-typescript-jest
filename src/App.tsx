import React from 'react';
import logo from './logo.svg';
import './css/picture.css'
import girlfriend from './static/girlfriend.png'
import './App.css';
import Button from "./component/button";
import Game from "./component/game";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game/>
      </header>
    </div>
  );
}

export default App;
