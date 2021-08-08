import "./WeatherCard.scss";
import { DateTime } from "luxon";

function WeatherCard({
  date,
  forecast,
  high,
  low,
  weatherStateAbbr,
  degreeMeasure = "C",
}) {
  // Example: Sun, 1 Aug
  const d = DateTime.fromISO(date).toFormat("ccc, d LLL");

  return (
    <article className="weather-card">
      <h3>{d}</h3>
      <img
        src={process.env.PUBLIC_URL + `/img/${weatherStateAbbr}.png`}
        alt={weatherStateAbbr}
      />
      <div className="tempature-range">
        <span>
          {parseInt(high)}&deg;{degreeMeasure}
        </span>
        <span>
          {parseInt(low)}&deg;{degreeMeasure}
        </span>
      </div>
    </article>
  );
}

export default WeatherCard;
