import './Forecast.scss';
import WeatherCard from './WeatherCard';

function Forecast({forecast}) {

  return (
    <section className="forecast">
      <h2>{forecast.length} Day Forecast</h2>
      <div>
        {forecast.map(item =>
          <WeatherCard
            key={item.id}
            date={item.applicable_date}
            forecast="LightCloud"
            high={item.max_temp}
            low={item.min_temp}
            weatherStateAbbr={item.weather_state_abbr}/>
        )}
      </div>
    </section>
  );
}

export default Forecast;
