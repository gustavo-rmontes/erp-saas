
import { useState } from 'react';
import Chart from '../components/Dashboard/Chart';

const FluxoCaixa = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [chartType, setChartType] = useState('area');
  
  // Dados fictícios para os gráficos
  const fluxoCaixaData = [
    { name: '01/04', receitas: 2500, despesas: 1800, saldo: 700 },
    { name: '08/04', receitas: 3200, despesas: 2500, saldo: 700 },
    { name: '15/04', receitas: 4500, despesas: 3200, saldo: 1300 },
    { name: '22/04', receitas: 3800, despesas: 2800, saldo: 1000 },
    { name: '29/04', receitas: 5200, despesas: 3500, saldo: 1700 },
    { name: '06/05', receitas: 4800, despesas: 3700, saldo: 1100 },
    { name: '13/05', receitas: 5500, despesas: 4100, saldo: 1400 },
  ];

  // Dados projetados (previsão)
  const projecaoData = [
    { name: '29/04', receitas: 5200, despesas: 3500, saldo: 1700 },
    { name: '06/05', receitas: 4800, despesas: 3700, saldo: 1100 },
    { name: '13/05', receitas: 5500, despesas: 4100, saldo: 1400 },
    { name: '20/05', receitas: 5800, despesas: 4300, saldo: 1500 },
    { name: '27/05', receitas: 6200, despesas: 4500, saldo: 1700 },
    { name: '03/06', receitas: 6000, despesas: 4600, saldo: 1400 },
    { name: '10/06', receitas: 6500, despesas: 4900, saldo: 1600 },
  ];

  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.5rem' 
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '600' }}>Fluxo de Caixa</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="btn btn-outline" style={{ marginRight: '0.75rem' }}>Exportar PDF</button>
          <button className="btn btn-outline">Exportar Excel</button>
        </div>
      </div>

      <div className="grid">
        <div className="col-4 col-lg-6 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Fluxo Atual (Mês)</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#f8f9fa' }}>Entradas:</span>
                <span style={{ color: '#4CAF50', fontWeight: '500' }}>R$ 42.800,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#f8f9fa' }}>Saídas:</span>
                <span style={{ color: '#FF5252', fontWeight: '500' }}>R$ 35.320,00</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid #333'
              }}>
                <span style={{ color: '#f8f9fa', fontWeight: '500' }}>Saldo:</span>
                <span style={{ color: '#1ebcc3', fontWeight: '600' }}>R$ 7.480,00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-6 col-md-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Fluxo Projetado (Próximo Mês)</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#f8f9fa' }}>Entradas Previstas:</span>
                <span style={{ color: '#4CAF50', fontWeight: '500' }}>R$ 46.500,00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: '#f8f9fa' }}>Saídas Previstas:</span>
                <span style={{ color: '#FF5252', fontWeight: '500' }}>R$ 38.900,00</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid #333'
              }}>
                <span style={{ color: '#f8f9fa', fontWeight: '500' }}>Saldo Projetado:</span>
                <span style={{ color: '#1ebcc3', fontWeight: '600' }}>R$ 7.600,00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-lg-12">
          <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '1.25rem',
            height: '100%'
          }}>
            <h3 style={{ fontSize: '1rem', color: '#a0a0a0', marginBottom: '0.5rem' }}>Indicadores</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem' }}>Índice de Liquidez</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>1.21</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#252525', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '75%', backgroundColor: '#4CAF50' }}></div>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem' }}>Saúde Financeira</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Boa</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#252525', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '80%', backgroundColor: '#1ebcc3' }}></div>
                </div>
              </div>
              
              <div>
                <div style={{ marginBottom: '0.375rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.875rem' }}>Crescimento de Receita</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>+8.6%</span>
                </div>
                <div style={{ height: '6px', backgroundColor: '#252525', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '60%', backgroundColor: '#FFC107' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Gráfico de Fluxo de Caixa</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '1rem' }}>
                <select 
                  style={{
                    backgroundColor: '#252525',
                    border: '1px solid #333',
                    color: '#f8f9fa',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '4px'
                  }}
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                >
                  <option value="area">Área</option>
                  <option value="bar">Barras</option>
                  <option value="line">Linha</option>
                </select>
              </div>
              <div>
                <button 
                  className={`btn ${timeRange === 'week' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setTimeRange('week')}
                  style={{ marginRight: '0.5rem' }}
                >
                  Semana
                </button>
                <button 
                  className={`btn ${timeRange === 'month' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setTimeRange('month')}
                  style={{ marginRight: '0.5rem' }}
                >
                  Mês
                </button>
                <button 
                  className={`btn ${timeRange === 'year' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setTimeRange('year')}
                >
                  Ano
                </button>
              </div>
            </div>
          </div>
          <div style={{ height: '350px' }}>
            <Chart type={chartType} data={fluxoCaixaData} height={350} />
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '1rem',
            color: '#a0a0a0',
            fontSize: '0.875rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '1.5rem' }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#4CAF50', 
                borderRadius: '2px',
                display: 'inline-block',
                marginRight: '0.5rem'
              }}></span>
              <span>Receitas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '1.5rem' }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#FF5252', 
                borderRadius: '2px',
                display: 'inline-block',
                marginRight: '0.5rem'
              }}></span>
              <span>Despesas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: '#1ebcc3', 
                borderRadius: '2px',
                display: 'inline-block',
                marginRight: '0.5rem'
              }}></span>
              <span>Saldo</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Projeção Futura (Próximos 30 dias)</h2>
            <div>
              <button className="btn btn-outline" style={{ marginRight: '0.75rem' }}>Configurar Projeção</button>
              <button className="btn btn-primary">Atualizar</button>
            </div>
          </div>
          <div style={{ height: '350px' }}>
            <Chart type="area" data={projecaoData} height={350} />
          </div>
          
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Alertas e Recomendações</h3>
            
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'rgba(255, 82, 82, 0.1)', 
              borderLeft: '4px solid #FF5252',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              <h4 style={{ color: '#FF5252', marginBottom: '0.5rem', fontWeight: '500' }}>⚠️ Alerta: Pico de despesas no dia 20/05</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Há um pico de despesas previsto para 20/05 que pode comprometer o fluxo de caixa. Considere antecipar alguns recebimentos ou negociar o adiamento de algumas despesas.
              </p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'rgba(255, 193, 7, 0.1)', 
              borderLeft: '4px solid #FFC107',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              <h4 style={{ color: '#FFC107', marginBottom: '0.5rem', fontWeight: '500' }}>📊 Observação: Tendência de crescimento moderado</h4>
              <p style={{ fontSize: '0.875rem' }}>
                O fluxo de caixa apresenta tendência de crescimento moderado. Mantenha o controle das despesas para garantir que o saldo positivo continue aumentando.
              </p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'rgba(76, 175, 80, 0.1)', 
              borderLeft: '4px solid #4CAF50',
              borderRadius: '4px'
            }}>
              <h4 style={{ color: '#4CAF50', marginBottom: '0.5rem', fontWeight: '500' }}>💡 Recomendação: Oportunidade de investimento</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Com o saldo positivo projetado para o final do período, considere a possibilidade de reservar uma parte para investimentos de curto prazo com boa liquidez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluxoCaixa;
