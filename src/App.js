import React, {useState} from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4a81816180e2bc38c902b0829da85882`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          type="text"
          placeholder="Emplacement:"
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className="description">
             <p>Ensoleillé</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">28°C</p>
            <p>Ressenti</p>
          </div>
          <div className="humidity">
            <p className="bold">32%</p>
            <p>Humidité</p>
          </div>
          <div className="wind">
            <p className="bold">16 km/h</p>
            <p>Vent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
