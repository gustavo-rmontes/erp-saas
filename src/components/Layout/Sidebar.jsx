
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

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
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar-header ${collapsed ? 'collapsed' : ''}`}>
        {!collapsed && <h2 className="sidebar-title">Fluxo Verde</h2>}
        <button 
          className="toggle-button"
          onClick={toggleSidebar}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`menu-item ${collapsed ? 'collapsed' : ''} ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className={`menu-icon ${collapsed ? 'collapsed' : ''}`}>
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
