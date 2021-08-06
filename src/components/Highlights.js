import './Highlights.scss';
import HighlightCard from './HighlightCard';

function Highlights({weather}) {

  const {
    wind_speed,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure
  } = weather;
  console.log(weather);
  return (
    <section className="highlights">
      <h2>Today's Highlights</h2>
      <div className="highlights-row">
        <div>
          <HighlightCard
            title="Wind status"
            stat={parseFloat(wind_speed).toFixed(1)}
            statSuffix="mph"
            />
        </div>
        <div>
          <HighlightCard
            title="Humidity"
            stat={humidity}
            statSuffix="%"
            />
        </div>
        <div>
          <HighlightCard
            title="Visibility"
            stat={parseFloat(visibility).toFixed(1)}
            statSuffix="Miles"
            />
        </div>
        <div>
          <HighlightCard
            title="Air Pressure"
            stat={air_pressure}
            statSuffix="mb"
            />
        </div>
      </div>
    </section>
  );
}

export default Highlights;
