import { DateTime } from 'luxon';
import './WeatherCardToday.scss';

function WeatherCardToday({weather}) {
  // Example: Sun, 1 Aug
  const d = DateTime.fromISO(weather.applicable_date).toFormat('ccc, d LLL');
  return (
    <article className="weather-card-today">
      <img src={process.env.PUBLIC_URL + `/img/${weather.weather_state_abbr}.png`} alt={weather.weather_state_abbr} />
      <h2 className="sr-only">Today's Weather</h2>
      <div className="weather-current-temp">
        {parseInt(weather.the_temp)}<small>&deg;C</small>
      </div>
      <div className="weather-state">
        {weather.weather_state_name}
      </div>
      <div className="weather-metadata">
        <div className="day-info">
          <span>Today</span><span>•</span><span>{d}</span>
        </div>
        <div className="location-info">
          {weather.location}
        </div>
      </div>

    </article>
  );
}

export default WeatherCardToday;

