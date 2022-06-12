import React, {useState} from "react";
import axios from 'axios'

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=4a81816180e2bc38c902b0829da85882`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Paris</p>
          </div>
          <div className="temp">
            <h1>23°C</h1>
          </div>
          <div className="description">
             <p>Ensoleillé</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>23°C</p>
          </div>
          <div className="humidity">
            <p>32%</p>
          </div>
          <div className="wind">
            13 km / h
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
