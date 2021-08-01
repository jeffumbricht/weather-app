import './App.scss';
import { useEffect, useState } from 'react';
import { getWeather } from './services/mock-api';
import Forecast from './components/Forecast';


function App() {

  const [weather, setWeather] = useState({
    'today': null,
    'forecast': []
  });

  useEffect(() => {
    // effect callback
    getWeather()
    .then(data => {
      setWeather({
        'today': data.consolidated_weather[0],
        'forecast': data.consolidated_weather.slice(1)
      });
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

        <article>Today's Weather</article>

      </section>

      <Forecast forecast={weather.forecast}/>

      <section>
        Today's highlights
        <article>Weather stat</article>
        <article>Weather stat</article>
      </section>

    </main>
  );
}

export default App;
