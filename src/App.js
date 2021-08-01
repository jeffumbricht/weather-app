import './App.scss';
import { useEffect, useState } from 'react';
import { getForecast } from './services/mock-api';
import Forecast from './components/Forecast';


function App() {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // effect callback
    getForecast()
    .then(data => setForecast(data.consolidated_weather));
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
