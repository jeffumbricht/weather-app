import './App.scss';
import Forecast from './components/Forecast';
import WeatherCard from './components/WeatherCard';

function App() {
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

      <Forecast>
        <WeatherCard day="Tomorrow" forecast="LightCloud" high="16&deg;C" low="11&deg;C" />
        <WeatherCard day="Sun, 7 Jun" forecast="LightCloud" high="16&deg;C" low="11&deg;C" />
        <WeatherCard day="Mon, 8 Jun" forecast="LightCloud" high="16&deg;C" low="11&deg;C" />
        <WeatherCard day="Tue, 9 Jun" forecast="LightCloud" high="16&deg;C" low="11&deg;C" />
        <WeatherCard day="Wed, 10 Jun" forecast="LightCloud" high="16&deg;C" low="11&deg;C" />
      </Forecast>

      <section>
        Today's highlights
        <article>Weather stat</article>
        <article>Weather stat</article>
      </section>

    </main>
  );
}

export default App;
