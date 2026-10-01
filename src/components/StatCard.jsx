import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  positive = true,
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">
          <Icon size={20} />
        </div>

        <span
          className={`stat-change ${
            positive ? "change-positive" : "change-negative"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}

          {change}
        </span>
      </div>

      <div className="stat-content">
        <span>{title}</span>
        <h3>{value}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default StatCard;


