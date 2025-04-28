
import { useState } from 'react';
import Chart from '../components/Dashboard/Chart';

const Bancos = () => {
  const [activeTab, setActiveTab] = useState('contas');
  const [showModal, setShowModal] = useState(false);
  
  const contas = [
    { id: 1, nome: 'Conta Principal', banco: 'Banco A', agencia: '1234', conta: '56789-0', saldo: 15280.75, tipo: 'corrente' },
    { id: 2, nome: 'Conta Reserva', banco: 'Banco B', agencia: '4321', conta: '98765-4', saldo: 28750.40, tipo: 'poupança' },
    { id: 3, nome: 'Conta Investimentos', banco: 'Banco C', agencia: '5678', conta: '12345-6', saldo: 42300.00, tipo: 'investimento' }
  ];
  
  const transacoes = [
    { id: 1, data: '28/04/2025', descricao: 'Transferência Recebida', valor: 3500.00, tipo: 'entrada', conta: 'Conta Principal' },
    { id: 2, data: '28/04/2025', descricao: 'Pagamento a Fornecedor', valor: 1200.00, tipo: 'saida', conta: 'Conta Principal' },
    { id: 3, data: '27/04/2025', descricao: 'Rendimentos', valor: 320.50, tipo: 'entrada', conta: 'Conta Investimentos' },
    { id: 4, data: '26/04/2025', descricao: 'Transferência entre Contas', valor: 5000.00, tipo: 'saida', conta: 'Conta Principal' },
    { id: 5, data: '26/04/2025', descricao: 'Transferência entre Contas', valor: 5000.00, tipo: 'entrada', conta: 'Conta Reserva' },
    { id: 6, data: '25/04/2025', descricao: 'Pagamento de Serviço', valor: 750.00, tipo: 'saida', conta: 'Conta Principal' },
    { id: 7, data: '25/04/2025', descricao: 'Recebimento de Cliente', valor: 2100.00, tipo: 'entrada', conta: 'Conta Principal' }
  ];
  
  const alertas = [
    { id: 1, tipo: 'divergencia', descricao: 'Divergência identificada no extrato da Conta Principal', data: '28/04/2025', valor: 150.00 },
    { id: 2, tipo: 'movimentacao', descricao: 'Movimentação suspeita na Conta Investimentos', data: '27/04/2025', valor: 320.50 },
    { id: 3, tipo: 'saldo', descricao: 'Saldo abaixo do limite mínimo na Conta Principal', data: '25/04/2025', valor: null }
  ];
  
  const historicoSaldo = [
    { name: 'Jan', saldo: 8200 },
    { name: 'Fev', saldo: 9500 },
    { name: 'Mar', saldo: 12800 },
    { name: 'Abr', saldo: 15280 },
    { name: 'Mai', saldo: 17500 },
    { name: 'Jun', saldo: 22300 },
    { name: 'Jul', saldo: 25400 },
  ];

  const saldoTotal = contas.reduce((total, conta) => total + conta.saldo, 0);
  
  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.5rem' 
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '600' }}>Gestão Bancária</h1>
        <div>
          <button 
            className="btn btn-outline"
            style={{ marginRight: '0.75rem' }}
            onClick={() => setShowModal(true)}
          >
            Importar Extrato
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            + Nova Conta
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
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Saldo Total</h3>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#f8f9fa' }}>
              R$ {saldoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h2>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
              <p style={{ color: '#a0a0a0', marginBottom: '1rem' }}>Distribuição por Conta:</p>
              {contas.map((conta) => (
                <div key={conta.id} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                    <span>{conta.nome}</span>
                    <span style={{ fontWeight: '500' }}>
                      R$ {conta.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: '#252525', borderRadius: '2px' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        width: `${(conta.saldo / saldoTotal) * 100}%`, 
                        backgroundColor: conta.tipo === 'corrente' ? '#1ebcc3' : 
                                        conta.tipo === 'poupança' ? '#4CAF50' : '#FFC107',
                        borderRadius: '2px'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
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
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Evolução do Saldo</h3>
            <Chart type="line" data={historicoSaldo} height={250} />
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
                backgroundColor: activeTab === 'contas' ? '#252525' : 'transparent',
                border: 'none',
                color: '#f8f9fa',
                fontWeight: activeTab === 'contas' ? '500' : '400',
                borderBottom: activeTab === 'contas' ? '2px solid #1ebcc3' : 'none',
                borderRight: '1px solid #333',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('contas')}
            >
              Contas Bancárias
            </button>
            <button 
              style={{ 
                padding: '1rem 1.25rem', 
                backgroundColor: activeTab === 'transacoes' ? '#252525' : 'transparent',
                border: 'none',
                color: '#f8f9fa',
                fontWeight: activeTab === 'transacoes' ? '500' : '400',
                borderBottom: activeTab === 'transacoes' ? '2px solid #1ebcc3' : 'none',
                borderRight: '1px solid #333',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('transacoes')}
            >
              Transações
            </button>
            <button 
              style={{ 
                padding: '1rem 1.25rem', 
                backgroundColor: activeTab === 'alertas' ? '#252525' : 'transparent',
                border: 'none',
                color: '#f8f9fa',
                fontWeight: activeTab === 'alertas' ? '500' : '400',
                borderBottom: activeTab === 'alertas' ? '2px solid #1ebcc3' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => setActiveTab('alertas')}
            >
              Alertas
            </button>
          </div>
          
          {activeTab === 'contas' && (
            <div style={{ padding: '1.25rem' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Banco</th>
                    <th>Agência</th>
                    <th>Conta</th>
                    <th>Tipo</th>
                    <th>Saldo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {contas.map((conta) => (
                    <tr key={conta.id}>
                      <td>{conta.nome}</td>
                      <td>{conta.banco}</td>
                      <td>{conta.agencia}</td>
                      <td>{conta.conta}</td>
                      <td>
                        <span style={{
                          color: conta.tipo === 'corrente' ? '#1ebcc3' : 
                                conta.tipo === 'poupança' ? '#4CAF50' : '#FFC107',
                          backgroundColor: conta.tipo === 'corrente' ? 'rgba(30, 188, 195, 0.1)' : 
                                        conta.tipo === 'poupança' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.875rem'
                        }}>
                          {conta.tipo.charAt(0).toUpperCase() + conta.tipo.slice(1)}
                        </span>
                      </td>
                      <td style={{ fontWeight: '500' }}>
                        R$ {conta.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'transacoes' && (
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  <input 
                    type="text" 
                    placeholder="Buscar transação..." 
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
                    <option value="">Todas as contas</option>
                    {contas.map((conta) => (
                      <option key={conta.id} value={conta.id}>{conta.nome}</option>
                    ))}
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
                    <th>Conta</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {transacoes.map((transacao) => (
                    <tr key={transacao.id}>
                      <td>{transacao.data}</td>
                      <td>{transacao.descricao}</td>
                      <td>{transacao.conta}</td>
                      <td>
                        <span style={{
                          color: transacao.tipo === 'entrada' ? '#4CAF50' : '#FF5252',
                          backgroundColor: transacao.tipo === 'entrada' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 82, 82, 0.1)',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.875rem'
                        }}>
                          {transacao.tipo === 'entrada' ? 'Crédito' : 'Débito'}
                        </span>
                      </td>
                      <td style={{ color: transacao.tipo === 'entrada' ? '#4CAF50' : '#FF5252', fontWeight: '500' }}>
                        {transacao.tipo === 'entrada' ? '+' : '-'} R$ {transacao.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#1ebcc3',
                          marginRight: '0.5rem',
                          cursor: 'pointer'
                        }}>
                          Detalhes
                        </button>
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#a0a0a0',
                          cursor: 'pointer'
                        }}>
                          Conciliar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <div style={{ color: '#a0a0a0' }}>
                  Exibindo 1-7 de 42 registros
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
          
          {activeTab === 'alertas' && (
            <div style={{ padding: '1.25rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Alertas Recentes</h3>
                  <button className="btn btn-outline">Configurar Alertas</button>
                </div>
                {alertas.map((alerta) => (
                  <div 
                    key={alerta.id}
                    style={{ 
                      backgroundColor: '#252525', 
                      borderRadius: '8px', 
                      padding: '1rem',
                      marginBottom: '0.75rem',
                      borderLeft: `4px solid ${
                        alerta.tipo === 'divergencia' ? '#FF5252' : 
                        alerta.tipo === 'movimentacao' ? '#FFC107' : '#1ebcc3'
                      }`
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        fontWeight: '500',
                        color: alerta.tipo === 'divergencia' ? '#FF5252' : 
                              alerta.tipo === 'movimentacao' ? '#FFC107' : '#1ebcc3'
                      }}>
                        {alerta.tipo === 'divergencia' ? '⚠️ Alerta de Divergência' : 
                        alerta.tipo === 'movimentacao' ? '🔍 Movimentação Suspeita' : '💰 Alerta de Saldo'}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>{alerta.data}</span>
                    </div>
                    <p style={{ marginBottom: '0.5rem' }}>{alerta.descricao}</p>
                    {alerta.valor && (
                      <p style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>
                        Valor: R$ {alerta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                      <button
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#1ebcc3',
                          cursor: 'pointer',
                          fontSize: '0.875rem'
                        }}
                      >
                        Verificar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1rem' }}>Recomendações</h3>
                <div
                  style={{ 
                    backgroundColor: '#252525', 
                    borderRadius: '8px', 
                    padding: '1rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <h4 style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Otimização de Contas</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    Você possui R$ 28.750,40 em conta poupança. Este valor poderia render mais em investimentos de renda fixa.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      Ver opções
                    </button>
                  </div>
                </div>
                
                <div
                  style={{ 
                    backgroundColor: '#252525', 
                    borderRadius: '8px', 
                    padding: '1rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <h4 style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Análise de Taxas</h4>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    Sua conta no Banco A possui taxas mensais mais altas que a média do mercado. Considere negociar ou trocar de banco.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1ebcc3',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      Comparar taxas
                    </button>
                  </div>
                </div>
              </div>
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Nova Conta Bancária</h2>
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
                <label className="form-label">Nome da Conta</label>
                <input type="text" className="form-control" placeholder="Ex: Conta Principal" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Banco</label>
                <input type="text" className="form-control" placeholder="Nome do banco" />
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Agência</label>
                  <input type="text" className="form-control" placeholder="Número da agência" />
                </div>
                
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Conta</label>
                  <input type="text" className="form-control" placeholder="Número da conta" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Tipo de Conta</label>
                <select className="form-control">
                  <option value="corrente">Conta Corrente</option>
                  <option value="poupança">Conta Poupança</option>
                  <option value="investimento">Conta de Investimento</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Saldo Inicial (R$)</label>
                <input type="number" className="form-control" placeholder="0,00" step="0.01" />
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
              >
                Adicionar Conta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bancos;
