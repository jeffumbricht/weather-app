import './WeatherCard.scss';

function WeatherCard({day, forecast, high, low}) {
  return (
    <article className="weather-card">
        <h3>{day}</h3>
        <img src={process.env.PUBLIC_URL + `/img/${forecast}.png`} alt= "" />
        <div className="tempature-range">
          <span>{high}</span>
          <span>{low}</span>
        </div>
    </article>
  );
}

export default WeatherCard;

