import { useState } from 'react';
import './ContasReceber.css';

const ContasReceber = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('todas');
  
  // Dados fictícios
  const contas = [
    { id: 1, cliente: 'Cliente A', descricao: 'Venda de produtos', valor: 4500.00, vencimento: '29/04/2025', status: 'pendente', categoria: 'Vendas', contato: 'contato@clientea.com' },
    { id: 2, cliente: 'Cliente B', descricao: 'Serviço de consultoria', valor: 3800.00, vencimento: '28/04/2025', status: 'pendente', categoria: 'Serviços', contato: 'contato@clienteb.com' },
    { id: 3, cliente: 'Cliente C', descricao: 'Projeto de website', valor: 5200.00, vencimento: '05/05/2025', status: 'pendente', categoria: 'Projetos', contato: 'contato@clientec.com' },
    { id: 4, cliente: 'Cliente D', descricao: 'Hospedagem anual', valor: 1200.00, vencimento: '10/05/2025', status: 'pendente', categoria: 'Assinaturas', contato: 'contato@cliented.com' },
    { id: 5, cliente: 'Cliente E', descricao: 'Serviços especiais', valor: 2800.00, vencimento: '15/05/2025', status: 'pendente', categoria: 'Serviços', contato: 'contato@clientee.com' },
    { id: 6, cliente: 'Cliente F', descricao: 'Treinamento', valor: 3500.00, vencimento: '15/04/2025', status: 'recebido', categoria: 'Treinamentos', contato: 'contato@clientef.com' },
    { id: 7, cliente: 'Cliente G', descricao: 'Suporte mensal', valor: 1800.00, vencimento: '20/04/2025', status: 'recebido', categoria: 'Assinaturas', contato: 'contato@clienteg.com' },
    { id: 8, cliente: 'Cliente H', descricao: 'Licenças de software', valor: 2400.00, vencimento: '10/04/2025', status: 'recebido', categoria: 'Vendas', contato: 'contato@clienteh.com' },
    { id: 9, cliente: 'Cliente I', descricao: 'Manutenção preventiva', valor: 950.00, vencimento: '05/04/2025', status: 'recebido', categoria: 'Serviços', contato: 'contato@clientei.com' },
    { id: 10, cliente: 'Cliente J', descricao: 'Desenvolvimento de app', valor: 7500.00, vencimento: '18/04/2025', status: 'recebido', categoria: 'Projetos', contato: 'contato@clientej.com' },
    { id: 11, cliente: 'Cliente K', descricao: 'Consultoria estratégica', valor: 6200.00, vencimento: '25/03/2025', status: 'atrasado', categoria: 'Serviços', contato: 'contato@clientek.com' },
    { id: 12, cliente: 'Cliente L', descricao: 'Renovação de licenças', valor: 3800.00, vencimento: '15/03/2025', status: 'atrasado', categoria: 'Vendas', contato: 'contato@clientel.com' },
  ];
  
  const contasFiltradas = contas.filter(conta => {
    if (filterStatus === 'todas') return true;
    return conta.status === filterStatus;
  });
  
  const statusColor = (status) => {
    switch (status) {
      case 'recebido':
        return '#4CAF50';
      case 'pendente':
        return '#FFC107';
      case 'atrasado':
        return '#FF5252';
      default:
        return '#a0a0a0';
    }
  };
  
  const statusText = (status) => {
    switch (status) {
      case 'recebido':
        return '✓ Recebido';
      case 'pendente':
        return '⏱ Pendente';
      case 'atrasado':
        return '⚠️ Atrasado';
      default:
        return status;
    }
  };

  return (
    <div className="contas-container">
      <div className="contas-header">
        <h1 className="contas-title">Contas a Receber</h1>
        <div>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowModal(true)}
          >
            + Nova Conta a Receber
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="col-4 col-lg-4 col-md-12">
          <div className="card-container">
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Total a Receber</h3>
            <h2 className="card-value">R$ 17.500,00</h2>
            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #333', marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#a0a0a0' }}>Atrasados:</span>
                <span style={{ color: '#FF5252', fontWeight: '500' }}>R$ 10.000,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#a0a0a0' }}>A receber:</span>
                <span style={{ color: '#FFC107', fontWeight: '500' }}>R$ 7.500,00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-4 col-md-12">
          <div className="card-container">
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Próximos Recebimentos</h3>
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px', 
                marginBottom: '0.5rem',
                borderLeft: '4px solid #FFC107'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '500' }}>Cliente B</span>
                  <span style={{ color: '#FFC107' }}>28/04/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Serviço de consultoria</span>
                  <span style={{ fontWeight: '500' }}>R$ 3.800,00</span>
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
                  <span style={{ fontWeight: '500' }}>Cliente A</span>
                  <span style={{ color: '#FFC107' }}>29/04/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Venda de produtos</span>
                  <span style={{ fontWeight: '500' }}>R$ 4.500,00</span>
                </div>
              </div>
              
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                borderLeft: '4px solid #a0a0a0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: '500' }}>Cliente C</span>
                  <span>05/05/2025</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Projeto de website</span>
                  <span style={{ fontWeight: '500' }}>R$ 5.200,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-4 col-md-12">
          <div className="card-container">
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Ações Rápidas</h3>
            <div className="quick-actions">
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Enviar Lembretes Automáticos
              </button>
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Gerar Fatura para Cliente
              </button>
              <button className="btn btn-outline" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Relatório de Inadimplência
              </button>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                Configurar Cobranças Automáticas
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex' }}>
              <input 
                type="text" 
                placeholder="Buscar conta..." 
                className="search-bar"
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
                <option value="atrasado">Atrasados</option>
                <option value="recebido">Recebidos</option>
              </select>
            </div>
            <div>
              <button className="btn btn-outline">Exportar</button>
            </div>
          </div>
          
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Descrição</th>
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
                  <td>{conta.cliente}</td>
                  <td>{conta.descricao}</td>
                  <td>{conta.categoria}</td>
                  <td>{conta.vencimento}</td>
                  <td>R$ {conta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td>
                    <span className="status-badge" style={{
                      color: statusColor(conta.status),
                      backgroundColor: `${statusColor(conta.status)}15`,
                    }}>
                      {statusText(conta.status)}
                    </span>
                  </td>
                  <td>
                    {conta.status !== 'recebido' && (
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#4CAF50',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Receber
                      </button>
                    )}
                    {conta.status === 'atrasado' && (
                      <button style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#FFC107',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Cobrar
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
          
          <div className="table-footer">
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
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Nova Conta a Receber</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="modal-close"
              >
                ×
              </button>
            </div>
            
            <div style={{ padding: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Cliente</label>
                <input type="text" className="form-control" placeholder="Nome do cliente" />
              </div>
              
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
                <label className="form-label">E-mail do Cliente</label>
                <input type="email" className="form-control" placeholder="email@cliente.com" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Categoria</label>
                <select className="form-control">
                  <option value="">Selecione uma categoria</option>
                  <option value="vendas">Vendas</option>
                  <option value="servicos">Serviços</option>
                  <option value="projetos">Projetos</option>
                  <option value="assinaturas">Assinaturas</option>
                  <option value="treinamentos">Treinamentos</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control">
                  <option value="pendente">Pendente</option>
                  <option value="recebido">Recebido</option>
                  <option value="atrasado">Atrasado</option>
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
            
            <div className="modal-footer">
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

export default ContasReceber;
