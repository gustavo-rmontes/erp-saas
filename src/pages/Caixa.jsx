
import { useState } from 'react';

const Caixa = () => {
  const [activeTab, setActiveTab] = useState('movimentos');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('entrada');
  
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  
  const movimentos = [
    { id: 1, data: '28/04/2025', descricao: 'Recebimento Cliente A', tipo: 'entrada', valor: 3500.00 },
    { id: 2, data: '28/04/2025', descricao: 'Pagamento Fornecedor X', tipo: 'saida', valor: 1200.00 },
    { id: 3, data: '27/04/2025', descricao: 'Recebimento Cliente B', tipo: 'entrada', valor: 4800.00 },
    { id: 4, data: '27/04/2025', descricao: 'Despesas Operacionais', tipo: 'saida', valor: 650.00 },
    { id: 5, data: '26/04/2025', descricao: 'Recebimento Cliente C', tipo: 'entrada', valor: 2100.00 },
    { id: 6, data: '25/04/2025', descricao: 'Pagamento Internet', tipo: 'saida', valor: 300.00 },
    { id: 7, data: '25/04/2025', descricao: 'Pagamento Energia', tipo: 'saida', valor: 450.00 }
  ];

  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.5rem' 
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '600' }}>Controle de Caixa</h1>
        <div>
          <button 
            className="btn btn-primary" 
            onClick={() => openModal('entrada')} 
            style={{ marginRight: '0.75rem' }}
          >
            + Nova Entrada
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => openModal('saida')}
          >
            - Nova Saída
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="col-4 col-lg-6 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Saldo em Caixa</h3>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#f8f9fa' }}>R$ 15.280,75</h2>
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #333', marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#a0a0a0' }}>Entradas hoje:</span>
                <span style={{ color: '#4CAF50', fontWeight: '500' }}>R$ 3.500,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#a0a0a0' }}>Saídas hoje:</span>
                <span style={{ color: '#FF5252', fontWeight: '500' }}>R$ 1.200,00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-6 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Histórico Mensal</h3>
              </div>
              <div>
                <select style={{
                  backgroundColor: '#252525',
                  border: '1px solid #333',
                  color: '#f8f9fa',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '4px'
                }}>
                  <option value="abril">Abril 2025</option>
                  <option value="marco">Março 2025</option>
                  <option value="fevereiro">Fevereiro 2025</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Total Entradas</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '500', color: '#4CAF50' }}>R$ 42.800,00</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Total Saídas</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '500', color: '#FF5252' }}>R$ 35.320,00</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Saldo</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '500', color: '#1ebcc3' }}>R$ 7.480,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <div style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            display: 'flex', 
            borderBottom: '1px solid #333' 
          }}>
            <button 
              style={{ 
                padding: '1rem 1.25rem', 
                backgroundColor: activeTab === 'movimentos' ? '#252525' : 'transparent',
                border: 'none',
                color: '#f8f9fa',
                fontWeight: activeTab === 'movimentos' ? '500' : '400',
                borderBottom: activeTab === 'movimentos' ? '2px solid #1ebcc3' : 'none',
                borderRight: '1px solid #333',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('movimentos')}
            >
              Movimentos
            </button>
            <button 
              style={{ 
                padding: '1rem 1.25rem', 
                backgroundColor: activeTab === 'categorias' ? '#252525' : 'transparent',
                border: 'none',
                color: '#f8f9fa',
                fontWeight: activeTab === 'categorias' ? '500' : '400',
                borderBottom: activeTab === 'categorias' ? '2px solid #1ebcc3' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('categorias')}
            >
              Categorias
            </button>
          </div>
          
          {activeTab === 'movimentos' && (
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  <input 
                    type="text" 
                    placeholder="Buscar movimento..." 
                    style={{
                      backgroundColor: '#252525',
                      border: '1px solid #333',
                      color: '#f8f9fa',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      marginRight: '0.75rem',
                      width: '250px'
                    }}
                  />
                  <select style={{
                    backgroundColor: '#252525',
                    border: '1px solid #333',
                    color: '#f8f9fa',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px'
                  }}>
                    <option value="">Todos os tipos</option>
                    <option value="entrada">Entradas</option>
                    <option value="saida">Saídas</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-outline">Exportar</button>
                </div>
              </div>
              
              <table className="table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {movimentos.map((movimento) => (
                    <tr key={movimento.id}>
                      <td>{movimento.data}</td>
                      <td>{movimento.descricao}</td>
                      <td>
                        <span style={{
                          color: movimento.tipo === 'entrada' ? '#4CAF50' : '#FF5252',
                          backgroundColor: movimento.tipo === 'entrada' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 82, 82, 0.1)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.875rem'
                        }}>
                          {movimento.tipo === 'entrada' ? '+ Entrada' : '- Saída'}
                        </span>
                      </td>
                      <td style={{ color: movimento.tipo === 'entrada' ? '#4CAF50' : '#FF5252', fontWeight: '500' }}>
                        {movimento.tipo === 'entrada' ? '+' : '-'} R$ {movimento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#1ebcc3',
                          marginRight: '0.5rem',
                          cursor: 'pointer'
                        }}>
                          Editar
                        </button>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#FF5252',
                          cursor: 'pointer'
                        }}>
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <div style={{ color: '#a0a0a0' }}>
                  Exibindo 1-7 de 83 registros
                </div>
                <div style={{ display: 'flex' }}>
                  <button style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #333',
                    color: '#a0a0a0',
                    borderRadius: '4px 0 0 4px',
                    cursor: 'pointer'
                  }}>
                    Anterior
                  </button>
                  <button style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: '#1ebcc3',
                    border: '1px solid #1ebcc3',
                    color: '#fff',
                    cursor: 'pointer'
                  }}>
                    1
                  </button>
                  <button style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #333',
                    color: '#a0a0a0',
                    cursor: 'pointer'
                  }}>
                    2
                  </button>
                  <button style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'transparent',
                    border: '1px solid #333',
                    color: '#a0a0a0',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer'
                  }}>
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'categorias' && (
            <div style={{ padding: '1.25rem' }}>
              <p style={{ color: '#a0a0a0', marginBottom: '1rem' }}>
                Gerencie as categorias para classificar as entradas e saídas de caixa.
              </p>
              
              <div style={{ display: 'flex', marginBottom: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="Nova categoria..." 
                  style={{
                    backgroundColor: '#252525',
                    border: '1px solid #333',
                    color: '#f8f9fa',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px 0 0 4px',
                    flexGrow: 1
                  }}
                />
                <select style={{
                  backgroundColor: '#252525',
                  border: '1px solid #333',
                  borderLeft: 'none',
                  color: '#f8f9fa',
                  padding: '0.5rem 1rem',
                }}>
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>
                <button style={{
                  backgroundColor: '#1ebcc3',
                  border: 'none',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '0 4px 4px 0',
                  cursor: 'pointer'
                }}>
                  Adicionar
                </button>
              </div>
              
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Qtd. Movimentos</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vendas</td>
                    <td><span style={{ color: '#4CAF50' }}>Entrada</span></td>
                    <td>24</td>
                    <td>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Editar
                      </button>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#FF5252',
                        cursor: 'pointer'
                      }}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Serviços</td>
                    <td><span style={{ color: '#4CAF50' }}>Entrada</span></td>
                    <td>18</td>
                    <td>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Editar
                      </button>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#FF5252',
                        cursor: 'pointer'
                      }}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fornecedores</td>
                    <td><span style={{ color: '#FF5252' }}>Saída</span></td>
                    <td>32</td>
                    <td>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Editar
                      </button>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#FF5252',
                        cursor: 'pointer'
                      }}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Operacional</td>
                    <td><span style={{ color: '#FF5252' }}>Saída</span></td>
                    <td>29</td>
                    <td>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Editar
                      </button>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#FF5252',
                        cursor: 'pointer'
                      }}>
                        Excluir
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            width: '500px',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.25rem',
              borderBottom: '1px solid #333',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>
                {modalType === 'entrada' ? 'Nova Entrada de Caixa' : 'Nova Saída de Caixa'}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#a0a0a0',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Data</label>
                <input type="date" className="form-control" defaultValue="2025-04-28" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Descrição</label>
                <input type="text" className="form-control" placeholder="Descreva o movimento" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Valor (R$)</label>
                <input type="number" className="form-control" placeholder="0,00" step="0.01" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Categoria</label>
                <select className="form-control">
                  {modalType === 'entrada' ? (
                    <>
                      <option value="">Selecione uma categoria</option>
                      <option value="vendas">Vendas</option>
                      <option value="servicos">Serviços</option>
                      <option value="outros_recebimentos">Outros Recebimentos</option>
                    </>
                  ) : (
                    <>
                      <option value="">Selecione uma categoria</option>
                      <option value="fornecedores">Fornecedores</option>
                      <option value="operacional">Operacional</option>
                      <option value="outros_pagamentos">Outros Pagamentos</option>
                    </>
                  )}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Observações</label>
                <textarea 
                  className="form-control" 
                  rows="3" 
                  placeholder="Observações adicionais (opcional)"
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>
            </div>
            
            <div style={{
              padding: '1.25rem',
              borderTop: '1px solid #333',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <button 
                className="btn btn-outline" 
                onClick={() => setShowModal(false)}
                style={{ marginRight: '0.75rem' }}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary"
                style={{ backgroundColor: modalType === 'entrada' ? '#4CAF50' : '#FF5252' }}
              >
                {modalType === 'entrada' ? 'Registrar Entrada' : 'Registrar Saída'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caixa;
