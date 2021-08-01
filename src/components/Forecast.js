import './Forecast.scss';
import { useEffect, useState } from 'react';
import { getForecast } from '../services/mock-api';
import WeatherCard from './WeatherCard';

function Forecast({title="5 Day Forecast", children}) {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // effect callback
    getForecast()
    .then(data => {setForecast(data.consolidated_weather);console.log(data.consolidated_weather);});
  }, []);

  return (
    <section className="forecast">
      <h2 className="sr-only">{title}</h2>
      <div>
        {/* {forecast.map(item => <div>{item.id}</div>)} */}
        {forecast.map(item =>
          <WeatherCard
            date={item.applicable_date}
            forecast="LightCloud"
            high={parseInt(item.max_temp)}
            low={parseInt(item.min_temp)}
            weatherStateAbbr={item.weather_state_abbr}/>
        )}
      </div>
    </section>
  );
}

export default Forecast;

