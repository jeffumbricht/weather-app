import './Forecast.scss';

function Forecast({title="5 Day Forecast", children}) {
  return (
    <section className="forecast">
      <h2 className="sr-only">{title}</h2>
      <div>
        {children}
      </div>
    </section>
  );
}

export default Forecast;

