import './App.css';

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
      <section>
        5 day forecast
        <article>Today's Weather</article>
        <article>Tomorrow's Weather</article>

        Today's highlights
        <article>Weather stat</article>
        <article>Weather stat</article>
      </section>

    </main>
  );
}

export default App;
