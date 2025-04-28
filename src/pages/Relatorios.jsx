import { useState } from 'react';
import Chart from '../components/Dashboard/Chart';
import './Relatorios.css';

const Relatorios = () => {
  const [reportType, setReportType] = useState('fluxo-caixa');
  const [dateRange, setDateRange] = useState('mes-atual');
  
  const fluxoCaixaMensal = [
    { name: '01/04', receitas: 2500, despesas: 1800, saldo: 700 },
    { name: '08/04', receitas: 3200, despesas: 2500, saldo: 700 },
    { name: '15/04', receitas: 4500, despesas: 3200, saldo: 1300 },
    { name: '22/04', receitas: 3800, despesas: 2800, saldo: 1000 },
    { name: '29/04', receitas: 5200, despesas: 3500, saldo: 1700 },
  ];
  
  const despesasCategorias = [
    { name: 'Fornecedores', value: 22500 },
    { name: 'Operacional', value: 15800 },
    { name: 'Pessoal', value: 32400 },
    { name: 'Marketing', value: 8500 },
    { name: 'Impostos', value: 18700 },
  ];
  
  const receitasCategorias = [
    { name: 'Vendas', value: 45000 },
    { name: 'Serviços', value: 38200 },
    { name: 'Assinaturas', value: 12500 },
    { name: 'Projetos', value: 28900 },
  ];

  return (
    <div className="relatorios-container">
      <div className="relatorios-header">
        <h1 className="relatorios-title">Relatórios</h1>
        <div>
          <button className="btn btn-outline" style={{ marginRight: '0.75rem' }}>Exportar PDF</button>
          <button className="btn btn-outline">Exportar Excel</button>
        </div>
      </div>

      <div className="grid">
        <div className="col-3 col-lg-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '1rem' }}>Selecionar Relatório</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Tipo de Relatório</label>
              <select 
                className="form-control"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="fluxo-caixa">Fluxo de Caixa</option>
                <option value="dre">DRE</option>
                <option value="contas-pagar">Contas a Pagar</option>
                <option value="contas-receber">Contas a Receber</option>
                <option value="inadimplencia">Inadimplência</option>
                <option value="impostos">Impostos</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Período</label>
              <select 
                className="form-control"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="mes-atual">Mês Atual</option>
                <option value="mes-anterior">Mês Anterior</option>
                <option value="trimestre">Último Trimestre</option>
                <option value="semestre">Último Semestre</option>
                <option value="ano">Ano Atual</option>
                <option value="personalizado">Personalizado</option>
              </select>
            </div>
            
            {dateRange === 'personalizado' && (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">De</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Até</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
            )}
            
            <div style={{ marginTop: '1.5rem' }}>
              <button className="btn btn-primary" style={{ width: '100%' }}>Gerar Relatório</button>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.75rem' }}>Relatórios Salvos</h4>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                marginBottom: '0.5rem',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Fluxo de Caixa - Março 2025</span>
                  <span style={{ fontSize: '0.75rem', color: '#a0a0a0' }}>10/04/25</span>
                </div>
              </div>
              
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                marginBottom: '0.5rem',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>DRE - 1º Trimestre 2025</span>
                  <span style={{ fontSize: '0.75rem', color: '#a0a0a0' }}>05/04/25</span>
                </div>
              </div>
              
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Contas a Pagar - Fevereiro 2025</span>
                  <span style={{ fontSize: '0.75rem', color: '#a0a0a0' }}>15/03/25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 col-lg-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.25rem',
            height: '100%'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1.5rem',
              borderBottom: '1px solid #333',
              paddingBottom: '1rem'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Relatório de Fluxo de Caixa - Abril 2025</h2>
              <div style={{ fontSize: '0.875rem', color: '#a0a0a0' }}>Gerado em 28/04/2025</div>
            </div>
            
            <div className="grid">
              <div className="col-4 col-md-12">
                <div style={{
                  backgroundColor: '#252525',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Receitas Totais</h3>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4CAF50' }}>R$ 124.600,00</h2>
                </div>
              </div>
              <div className="col-4 col-md-12">
                <div style={{
                  backgroundColor: '#252525',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Despesas Totais</h3>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FF5252' }}>R$ 97.900,00</h2>
                </div>
              </div>
              <div className="col-4 col-md-12">
                <div style={{
                  backgroundColor: '#252525',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Resultado</h3>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1ebcc3' }}>R$ 26.700,00</h2>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Fluxo de Caixa Diário</h3>
              <Chart type="area" data={fluxoCaixaMensal} height={250} />
            </div>
            
            <div className="grid">
              <div className="col-6 col-md-12">
                <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Despesas por Categoria</h3>
                <Chart type="pie" data={despesasCategorias} height={250} />
              </div>
              <div className="col-6 col-md-12">
                <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Receitas por Categoria</h3>
                <Chart type="pie" data={receitasCategorias} height={250} />
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Indicadores</h3>
              <div className="grid">
                <div className="col-4 col-md-6 col-sm-12">
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.875rem' }}>Margem de Lucro</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>21.4%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '21.4%', backgroundColor: '#4CAF50' }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.875rem' }}>Taxa de Crescimento (vs. mês anterior)</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>8.6%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '8.6%', backgroundColor: '#1ebcc3' }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.875rem' }}>Índice de Inadimplência</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>3.2%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#333', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: '3.2%', backgroundColor: '#FF5252' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' }}>Observações e Recomendações</h3>
              <div style={{ 
                backgroundColor: '#252525', 
                borderRadius: '6px',
                padding: '1rem'
              }}>
                <p style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: '500' }}>Análise:</span> O mês de Abril de 2025 apresentou um resultado positivo com crescimento de 8.6% em relação ao mês anterior. O fluxo de caixa se manteve positivo durante todo o período.
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: '500' }}>Pontos de Atenção:</span> Houve um aumento nas despesas operacionais que precisa ser monitorado nos próximos períodos. A categoria "Marketing" apresentou crescimento acima do esperado.
                </p>
                <p>
                  <span style={{ fontWeight: '500' }}>Recomendações:</span> Renegociar contratos com fornecedores principais para melhorar margens. Implementar ações para reduzir a inadimplência, atualmente em 3.2%.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
