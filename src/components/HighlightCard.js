import './HighlightCard.scss';

function HighlightCard({title, stat, statSuffix}) {
  return (
    <div className="highlight-card">
      <h3>{title}</h3>
      <div className="highlight-stat">
        {stat} <span className="highlight-stat-suffix">{statSuffix}</span>
      </div>
    </div>
  );
}

export default HighlightCard;
