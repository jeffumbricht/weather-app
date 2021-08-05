import './Highlights.scss';

function Highlights({weather}) {

  const {
    wind_speed,
    wind_direction,
    humidity,
    visibility,
    air_pressure
  } = weather;

  return (
    <section className="highlights">
      <h2>Today's Highlights</h2>
      <article>
        <h3>Wind status</h3>
       {wind_speed}
      </article>
      <article>
        <h3>Wind status</h3>
       {wind_speed}
      </article>
      <article>
        <h3>Wind status</h3>
       {wind_speed}
      </article>
      <article>
        <h3>Wind status</h3>
       {wind_speed}
      </article>
    </section>
  );
}

export default Highlights;
