import './App.scss';
import Forecast from './components/Forecast';

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

      <Forecast />

      <section>
        Today's highlights
        <article>Weather stat</article>
        <article>Weather stat</article>
      </section>

    </main>
  );
}

export default App;
