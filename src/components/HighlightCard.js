import './HighlightCard.scss';

function HighlightCard({title, stat, statSuffix, windDirectionCompass, windDirectionRotation}) {
  return (
    <article className="highlight-card">
      <h3>{title}</h3>
      <div className="highlight-stat">
        {stat} <span className="highlight-stat-suffix">{statSuffix}</span>
      </div>

      {windDirectionCompass &&
      <div className="highlight-stat-wind">
        <div className="highlight-stat-wind-direction">
          <img
            src={process.env.PUBLIC_URL + "/img/arrow.png"}
            alt=""
            style={{
              transform: 'rotate(' + parseInt(windDirectionRotation) + 'deg)'
            }}
          />
        </div>
        {windDirectionCompass}
      </div>
      }

    </article>
  );
}

export default HighlightCard;
