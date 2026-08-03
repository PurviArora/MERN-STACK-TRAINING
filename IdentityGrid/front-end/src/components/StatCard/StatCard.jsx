import "./StatCard.css";

function StatCard({ title, value, icon, color, change }) {
  return (
    <div className="stat-card">

      <div
        className="stat-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stat-details">

        <h4>{title}</h4>

        <h2>{value}</h2>

        <p>{change}</p>

      </div>

    </div>
  );
}

export default StatCard;