
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    if (onToggle) onToggle(!collapsed);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Caixa', path: '/caixa', icon: '💰' },
    { name: 'Contas a Pagar', path: '/contas-pagar', icon: '📉' },
    { name: 'Contas a Receber', path: '/contas-receber', icon: '📈' },
    { name: 'Bancos', path: '/bancos', icon: '🏦' },
    { name: 'Fluxo de Caixa', path: '/fluxo-caixa', icon: '💸' },
    { name: 'Relatórios', path: '/relatorios', icon: '📝' },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} style={{
      width: collapsed ? '80px' : '250px',
      height: '100vh',
      position: 'fixed',
      backgroundColor: '#1a1a1a',
      transition: 'width 0.3s ease',
      borderRight: '1px solid #333',
      zIndex: 1000,
      overflow: 'hidden'
    }}>
      <div className="sidebar-header" style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        padding: collapsed ? '1rem 0' : '1rem',
        borderBottom: '1px solid #333'
      }}>
        {!collapsed && <h2 style={{ color: '#1ebcc3' }}>Fluxo Verde</h2>}
        <button 
          onClick={toggleSidebar} 
          style={{
            background: 'transparent',
            border: 'none',
            color: '#1ebcc3',
            cursor: 'pointer',
            fontSize: '1.25rem'
          }}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <div className="sidebar-menu" style={{ marginTop: '1.5rem' }}>
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: collapsed ? '1rem 0' : '1rem',
              color: location.pathname === item.path ? '#1ebcc3' : '#a0a0a0',
              justifyContent: collapsed ? 'center' : 'flex-start',
              borderLeft: location.pathname === item.path ? '4px solid #1ebcc3' : '4px solid transparent',
              backgroundColor: location.pathname === item.path ? '#252525' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '1.25rem', marginRight: collapsed ? '0' : '0.75rem' }}>
              {item.icon}
            </span>
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
