
import './DashboardCard.css';

const DashboardCard = ({ title, value, icon, color, change, changeType, footer }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div>
          <h3 className="card-title">{title}</h3>
          <h2 className="card-value">{value}</h2>
          
          {change && (
            <div className="card-change">
              <span className={`change-value ${changeType === 'positive' ? 'change-positive' : 'change-negative'}`}>
                {changeType === 'positive' ? '↑' : '↓'} {change}
              </span>
            </div>
          )}
        </div>
        
        <div className="card-icon" style={{ backgroundColor: color || '#1ebcc3' }}>
          {icon}
        </div>
      </div>
      
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
