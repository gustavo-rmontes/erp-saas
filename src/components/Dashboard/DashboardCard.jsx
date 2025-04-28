
const DashboardCard = ({ title, value, icon, color, change, changeType, footer }) => {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '1.25rem',
      height: '100%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.375rem' }}>{title}</h3>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#f8f9fa' }}>{value}</h2>
          
          {change && (
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <span style={{ 
                color: changeType === 'positive' ? '#4CAF50' : '#FF5252',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                {changeType === 'positive' ? '↑' : '↓'} {change}
              </span>
            </div>
          )}
        </div>
        
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: color || '#1ebcc3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '1.25rem'
        }}>
          {icon}
        </div>
      </div>
      
      {footer && (
        <div style={{
          paddingTop: '0.75rem',
          borderTop: '1px solid #333',
          fontSize: '0.75rem',
          color: '#a0a0a0'
        }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
