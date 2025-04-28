
import { useState } from 'react';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  return (
    <header style={{
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      borderBottom: '1px solid #333',
      backgroundColor: '#1a1a1a',
      position: 'sticky',
      top: 0,
      zIndex: 999
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ color: '#f8f9fa', fontSize: '1.25rem' }}>Gestão Financeira</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', marginRight: '1.5rem' }}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)} 
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8f9fa',
              fontSize: '1.25rem',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            🔔
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: '#FF5252',
              fontSize: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>3</span>
          </button>
          
          {showNotifications && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: '-70px',
              width: '300px',
              backgroundColor: '#1e1e1e',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              padding: '1rem',
              zIndex: 1000
            }}>
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Notificações</h3>
              <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: '#252525', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.85rem', color: '#FF5252' }}>🚨 Contas a vencer hoje (3)</p>
                <p style={{ fontSize: '0.8rem', color: '#a0a0a0', marginTop: '0.25rem' }}>Há 20 minutos</p>
              </div>
              <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: '#252525', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.85rem', color: '#FFC107' }}>⚠️ Saldo baixo na conta principal</p>
                <p style={{ fontSize: '0.8rem', color: '#a0a0a0', marginTop: '0.25rem' }}>Há 2 horas</p>
              </div>
              <div style={{ padding: '0.75rem', backgroundColor: '#252525', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.85rem', color: '#4CAF50' }}>✅ Recebimento confirmado</p>
                <p style={{ fontSize: '0.8rem', color: '#a0a0a0', marginTop: '0.25rem' }}>Há 5 horas</p>
              </div>
              <button style={{
                width: '100%',
                padding: '0.5rem',
                marginTop: '1rem',
                backgroundColor: 'transparent',
                border: '1px solid #1ebcc3',
                color: '#1ebcc3',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>Ver todas</button>
            </div>
          )}
        </div>
        
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)} 
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'transparent',
              border: 'none',
              color: '#f8f9fa',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1ebcc3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem',
              fontSize: '1.1rem'
            }}>
              AG
            </div>
            <div>
              <div style={{ textAlign: 'left', fontSize: '0.9rem' }}>Admin</div>
              <div style={{ textAlign: 'left', fontSize: '0.75rem', color: '#a0a0a0' }}>admin@fluxoverde.com</div>
            </div>
          </button>
          
          {showUserMenu && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              width: '200px',
              backgroundColor: '#1e1e1e',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              zIndex: 1000,
              overflow: 'hidden'
            }}>
              <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #333' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>Admin</div>
                <div style={{ fontSize: '0.8rem', color: '#a0a0a0' }}>admin@fluxoverde.com</div>
              </div>
              <div style={{ padding: '0.5rem 0' }}>
                <button style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#f8f9fa',
                  cursor: 'pointer'
                }}>Configurações</button>
                <button style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#f8f9fa',
                  cursor: 'pointer'
                }}>Perfil</button>
                <button style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#FF5252',
                  cursor: 'pointer'
                }}>Sair</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
