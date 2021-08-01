import './App.scss';
import { useEffect, useState } from 'react';
import { getWeather } from './services/mock-api';
import Forecast from './components/Forecast';
import WeatherCardToday from './components/WeatherCardToday';

function App() {

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // effect callback
    getWeather()
    .then(data => {
      setWeather({'location': data.title, ...data.consolidated_weather[0]});
      setForecast(data.consolidated_weather.slice(1));
    });
  }, []);

  return (
    <main className="app">
      <section className="sidebar">
        <header>
          <button>
            Search for places
          </button>
          <button>
            By location
          </button>
        </header>

        <WeatherCardToday weather={weather} />

      </section>

      <Forecast forecast={forecast}/>

      <section>
        Today's highlights
        <article>Weather stat</article>
        <article>Weather stat</article>
      </section>

    </main>
  );
}

export default App;
