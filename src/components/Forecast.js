import "./Forecast.scss";
import WeatherCard from "./WeatherCard";

function Forecast({ forecast }) {
  return (
    <section className="forecast">
      <h2>{forecast.length} Day Forecast</h2>
      <div className="forecast-row">
        {forecast.map((item) => (
          <div>
            <WeatherCard
              key={item.id}
              date={item.applicable_date}
              forecast="LightCloud"
              high={item.max_temp}
              low={item.min_temp}
              weatherStateAbbr={item.weather_state_abbr}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;
