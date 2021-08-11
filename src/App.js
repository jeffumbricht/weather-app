import "./App.scss";
import { useEffect, useState } from "react";
import { getWeather } from "./services/mock-api";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import WeatherCardToday from "./components/WeatherCardToday";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // effect callback
    getWeather().then((data) => {
      setForecast(data.consolidated_weather.slice(1));
      setWeather({ location: data.title, ...data.consolidated_weather[0] });
    });
  }, []);

  return (
    <main className="app">
      {weather && forecast ? (
        <>
          <section className="sidebar">
            <header>
              <button>Search for places</button>
              <button>By location</button>
            </header>
            <WeatherCardToday weather={weather} />
          </section>

          <div className="content-area">
            <Forecast forecast={forecast} />
            <Highlights weather={weather} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default App;
