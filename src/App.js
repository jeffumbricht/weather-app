import './App.scss';
import { useEffect, useState } from 'react';
import { getWeather } from './services/mock-api';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import WeatherCardToday from './components/WeatherCardToday';

function App() {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // effect callback
    getWeather()
    .then(data => {
      setWeather({'location': data.title, ...data.consolidated_weather[0]});
      setForecast(data.consolidated_weather.slice(1));
      setIsLoaded(true);
    });
  }, []);

  return (
    <main className="app">
      { isLoaded ?
        <>
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

        <div className="content-area">
          <Forecast forecast={forecast}/>
          <Highlights weather={weather} />
        </div>

      </>
      : <p>Loading...</p>
    }
    </main>
  );
}

export default App;
