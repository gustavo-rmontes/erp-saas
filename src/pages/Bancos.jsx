import { useState } from 'react';
import Chart from '../components/Dashboard/Chart';
import './Bancos.css';

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
    <div className="bancos-container">
      <div className="bancos-header">
        <h1 className="bancos-title">Gestão Bancária</h1>
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
          <div className="saldo-card">
            <h3 className="saldo-subtitle">Saldo Total</h3>
            <h2 className="saldo-total">
              R$ {saldoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </h2>
            <div className="distribuicao-container">
              <p className="distribuicao-title">Distribuição por Conta:</p>
              {contas.map((conta) => (
                <div key={conta.id} className="conta-item">
                  <div className="conta-header">
                    <span>{conta.nome}</span>
                    <span className="conta-valor">
                      R$ {conta.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className={`progress-fill progress-fill-${conta.tipo}`}
                      style={{ width: `${(conta.saldo / saldoTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-6 col-md-12">
          <div className="evolucao-card">
            <h3 className="saldo-subtitle">Evolução do Saldo</h3>
            <Chart type="line" data={historicoSaldo} height={250} />
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'contas' ? 'active' : ''}`}
            onClick={() => setActiveTab('contas')}
          >
            Contas Bancárias
          </button>
          <button 
            className={`tab-button ${activeTab === 'transacoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('transacoes')}
          >
            Transações
          </button>
          <button 
            className={`tab-button ${activeTab === 'alertas' ? 'active' : ''}`}
            onClick={() => setActiveTab('alertas')}
          >
            Alertas
          </button>
        </div>
        
        {activeTab === 'contas' && (
          <div className="tab-content">
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
                      <span className={`badge badge-${conta.tipo}`}>
                        {conta.tipo.charAt(0).toUpperCase() + conta.tipo.slice(1)}
                      </span>
                    </td>
                    <td className="conta-valor">
                      R$ {conta.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                      <button className="action-button action-button-edit">
                        Editar
                      </button>
                      <button className="action-button action-button-delete">
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
          <div className="tab-content">
            <div className="table-actions">
              <div style={{ display: 'flex' }}>
                <input 
                  type="text" 
                  placeholder="Buscar transação..." 
                  className="search-input"
                />
                <select className="filter-select">
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
            
            <div className="pagination">
              <div className="pagination-info">
                Exibindo 1-7 de 42 registros
              </div>
              <div className="pagination-controls">
                <button className="pagination-button">Anterior</button>
                <button className="pagination-button active">1</button>
                <button className="pagination-button">2</button>
                <button className="pagination-button">Próximo</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'alertas' && (
          <div className="tab-content">
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="bancos-header">
                <h3 className="recomendacao-titulo">Alertas Recentes</h3>
                <button className="btn btn-outline">Configurar Alertas</button>
              </div>
              {alertas.map((alerta) => (
                <div 
                  key={alerta.id}
                  className={`alerta-item alerta-${alerta.tipo}`}
                >
                  <div className="alerta-header">
                    <span className="alerta-tipo">
                      {alerta.tipo === 'divergencia' ? '⚠️ Alerta de Divergência' : 
                      alerta.tipo === 'movimentacao' ? '🔍 Movimentação Suspeita' : '💰 Alerta de Saldo'}
                    </span>
                    <span className="alerta-data">{alerta.data}</span>
                  </div>
                  <p>{alerta.descricao}</p>
                  {alerta.valor && (
                    <p className="recomendacao-texto">
                      Valor: R$ {alerta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="action-button action-button-edit">
                      Verificar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="recomendacao-titulo">Recomendações</h3>
              <div className="recomendacao-card">
                <h4 className="recomendacao-titulo">Otimização de Contas</h4>
                <p className="recomendacao-texto">
                  Você possui R$ 28.750,40 em conta poupança. Este valor poderia render mais em investimentos de renda fixa.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="action-button action-button-edit">
                    Ver opções
                  </button>
                </div>
              </div>
              
              <div className="recomendacao-card">
                <h4 className="recomendacao-titulo">Análise de Taxas</h4>
                <p className="recomendacao-texto">
                  Sua conta no Banco A possui taxas mensais mais altas que a média do mercado. Considere negociar ou trocar de banco.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="action-button action-button-edit">
                    Comparar taxas
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Nova Conta Bancária</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="modal-close"
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
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
            
            <div className="modal-footer">
              <button 
                className="btn btn-outline" 
                onClick={() => setShowModal(false)}
                style={{ marginRight: '0.75rem' }}
              >
                Cancelar
              </button>
              <button className="btn btn-primary">
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
