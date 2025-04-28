
import { useState } from 'react';

const ContasPagar = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('todas');
  
  // Dados fictícios
  const contas = [
    { id: 1, descricao: 'Aluguel do escritório', valor: 3500.00, vencimento: '29/04/2025', status: 'pendente', categoria: 'Despesas Fixas', fornecedor: 'Imobiliária Central' },
    { id: 2, descricao: 'Fornecedor XYZ', valor: 1820.00, vencimento: '28/04/2025', status: 'pendente', categoria: 'Fornecedores', fornecedor: 'XYZ Comércio Ltda' },
    { id: 3, descricao: 'Internet e Telefonia', valor: 750.00, vencimento: '05/05/2025', status: 'pendente', categoria: 'Despesas Fixas', fornecedor: 'Telecom SA' },
    { id: 4, descricao: 'Energia Elétrica', valor: 1200.00, vencimento: '10/05/2025', status: 'pendente', categoria: 'Despesas Fixas', fornecedor: 'Energia S/A' },
    { id: 5, descricao: 'Consultoria Financeira', valor: 2500.00, vencimento: '15/05/2025', status: 'pendente', categoria: 'Serviços', fornecedor: 'Consultoria Finance' },
    { id: 6, descricao: 'Manutenção Sistemas', valor: 1800.00, vencimento: '15/04/2025', status: 'pago', categoria: 'TI', fornecedor: 'Tech Solutions' },
    { id: 7, descricao: 'Impostos Municipais', valor: 1250.00, vencimento: '20/04/2025', status: 'pago', categoria: 'Impostos', fornecedor: 'Prefeitura Municipal' },
    { id: 8, descricao: 'Material de Escritório', valor: 350.00, vencimento: '10/04/2025', status: 'pago', categoria: 'Materiais', fornecedor: 'Papelaria Total' },
    { id: 9, descricao: 'Limpeza e Conservação', valor: 650.00, vencimento: '05/04/2025', status: 'pago', categoria: 'Serviços', fornecedor: 'Clean Services' },
    { id: 10, descricao: 'Serviço de Contabilidade', valor: 1500.00, vencimento: '18/04/2025', status: 'pago', categoria: 'Serviços', fornecedor: 'Contabilidade Express' },
    { id: 11, descricao: 'Desenvolvimento de Website', valor: 4500.00, vencimento: '25/03/2025', status: 'vencido', categoria: 'TI', fornecedor: 'Web Developers Inc.' },
    { id: 12, descricao: 'Seguro Empresarial', valor: 2800.00, vencimento: '15/03/2025', status: 'vencido', categoria: 'Seguros', fornecedor: 'Segurança Total' },
  ];
  
  const contasFiltradas = contas.filter(conta => {
    if (filterStatus === 'todas') return true;
    return conta.status === filterStatus;
  });
  
  const statusColor = (status) => {
    switch (status) {
      case 'pago':
        return '#4CAF50';
      case 'pendente':
        return '#FFC107';
      case 'vencido':
        return '#FF5252';
      default:
        return '#a0a0a0';
    }
  };
  
  const statusText = (status) => {
    switch (status) {
      case 'pago':
        return '✓ Pago';
      case 'pendente':
        return '⏱ Pendente';
      case 'vencido':
        return '⚠️ Vencido';
      default:
        return status;
    }
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.5rem' 
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '600' }}>Contas a Pagar</h1>
        <div>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowModal(true)}
          >
            + Nova Conta a Pagar
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="col-4 col-lg-4 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Total a Pagar</h3>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#FF5252' }}>R$ 17.270,00</h2>
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #333', marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#a0a0a0' }}>Vencidas:</span>
                <span style={{ color: '#FF5252', fontWeight: '500' }}>R$ 7.300,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#a0a0a0' }}>A vencer:</span>
                <span style={{ color: '#FFC107', fontWeight: '500' }}>R$ 9.970,00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-4 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Próximos Vencimentos</h3>
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px', 
                marginBottom: '0.5rem',
                borderLeft: '4px solid #FF5252'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '500' }}>Fornecedor XYZ</span>
                  <span style={{ color: '#FF5252' }}>28/04/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Fornecedores</span>
                  <span style={{ fontWeight: '500' }}>R$ 1.820,00</span>
                </div>
              </div>
              
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px', 
                marginBottom: '0.5rem',
                borderLeft: '4px solid #FFC107'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '500' }}>Aluguel do escritório</span>
                  <span style={{ color: '#FFC107' }}>29/04/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Despesas Fixas</span>
                  <span style={{ fontWeight: '500' }}>R$ 3.500,00</span>
                </div>
              </div>
              
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                borderLeft: '4px solid #a0a0a0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '500' }}>Internet e Telefonia</span>
                  <span>05/05/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Despesas Fixas</span>
                  <span style={{ fontWeight: '500' }}>R$ 750,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-4 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Resumo</h3>
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px', 
                marginBottom: '0.75rem' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Despesas por Categorias</div>
                    <div style={{ fontSize: '0.875rem', color: '#a0a0a0', marginTop: '0.25rem' }}>Top 3 categorias</div>
                  </div>
                  <div style={{ color: '#1ebcc3', cursor: 'pointer', fontSize: '0.875rem' }}>Ver todas</div>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>Despesas Fixas</span>
                      <span style={{ fontSize: '0.875rem' }}>R$ 5.450,00</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px' }}>
                      <div style={{ backgroundColor: '#1ebcc3', width: '70%', height: '100%', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>TI</span>
                      <span style={{ fontSize: '0.875rem' }}>R$ 6.300,00</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px' }}>
                      <div style={{ backgroundColor: '#FFC107', width: '85%', height: '100%', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.875rem' }}>Serviços</span>
                      <span style={{ fontSize: '0.875rem' }}>R$ 4.650,00</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px' }}>
                      <div style={{ backgroundColor: '#FF5252', width: '55%', height: '100%', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-outline" style={{ width: '100%' }}>
                Gerar Relatório
              </button>
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
          <div style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex' }}>
                <input 
                  type="text" 
                  placeholder="Buscar conta..." 
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
                <select 
                  style={{
                    backgroundColor: '#252525',
                    border: '1px solid #333',
                    color: '#f8f9fa',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px'
                  }}
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="todas">Todos os status</option>
                  <option value="pendente">Pendentes</option>
                  <option value="vencido">Vencidos</option>
                  <option value="pago">Pagos</option>
                </select>
              </div>
              <div>
                <button className="btn btn-outline">Exportar</button>
              </div>
            </div>
            
            <table className="table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Fornecedor</th>
                  <th>Categoria</th>
                  <th>Vencimento</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {contasFiltradas.map((conta) => (
                  <tr key={conta.id}>
                    <td>{conta.descricao}</td>
                    <td>{conta.fornecedor}</td>
                    <td>{conta.categoria}</td>
                    <td>{conta.vencimento}</td>
                    <td>R$ {conta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td>
                      <span style={{
                        color: statusColor(conta.status),
                        backgroundColor: `${statusColor(conta.status)}15`,
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}>
                        {statusText(conta.status)}
                      </span>
                    </td>
                    <td>
                      {conta.status !== 'pago' && (
                        <button style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#4CAF50',
                          marginRight: '0.5rem',
                          cursor: 'pointer'
                        }}>
                          Pagar
                        </button>
                      )}
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
                Exibindo {contasFiltradas.length} de {contas.length} registros
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
              <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Nova Conta a Pagar</h2>
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
                <label className="form-label">Descrição</label>
                <input type="text" className="form-control" placeholder="Descreva a conta" />
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Valor (R$)</label>
                  <input type="number" className="form-control" placeholder="0,00" step="0.01" />
                </div>
                
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Data de Vencimento</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Fornecedor</label>
                <input type="text" className="form-control" placeholder="Nome do fornecedor" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Categoria</label>
                <select className="form-control">
                  <option value="">Selecione uma categoria</option>
                  <option value="despesas_fixas">Despesas Fixas</option>
                  <option value="fornecedores">Fornecedores</option>
                  <option value="servicos">Serviços</option>
                  <option value="ti">TI</option>
                  <option value="impostos">Impostos</option>
                  <option value="materiais">Materiais</option>
                  <option value="seguros">Seguros</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control">
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                  <option value="vencido">Vencido</option>
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
              >
                Salvar Conta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContasPagar;
