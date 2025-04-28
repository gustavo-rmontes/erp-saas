import { useState, useEffect } from 'react';
import DashboardCard from '../components/Dashboard/DashboardCard';
import Chart from '../components/Dashboard/Chart';
import { getDashboardData, getFluxoCaixaData } from '../services/dashboardService';
import { toast } from 'sonner';
import './Dashboard.css';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [dashboardData, setDashboardData] = useState(null);
  const [fluxoCaixaData, setFluxoCaixaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getDashboardData();
        const fluxoData = await getFluxoCaixaData();
        
        setDashboardData(data);
        setFluxoCaixaData(fluxoData);
      } catch (error) {
        toast.error('Erro ao carregar dados do dashboard');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ padding: '1.5rem' }}>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-timerange">
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

      <div className="grid">
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Saldo Consolidado" 
            value={dashboardData?.saldoConsolidado?.valor} 
            icon="💰" 
            color="#1ebcc3"
            change={dashboardData?.saldoConsolidado?.variacao}
            changeType={dashboardData?.saldoConsolidado?.variacaoTipo}
            footer={`Atualizado: ${dashboardData?.saldoConsolidado?.ultimaAtualizacao}`}
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Contas a Pagar" 
            value={dashboardData?.contasPagar?.valor}
            icon="📉" 
            color="#FF5252"
            change={dashboardData?.contasPagar?.vencimentosHoje}
            footer={`Próximo vencimento: ${dashboardData?.contasPagar?.proximoVencimento}`}
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Contas a Receber" 
            value={dashboardData?.contasReceber?.valor}
            icon="📈" 
            color="#4CAF50"
            change={dashboardData?.contasReceber?.recebimentosHoje}
            changeType="positive"
            footer={`Próximo recebimento: ${dashboardData?.contasReceber?.proximoRecebimento}`}
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Projeção de Fluxo" 
            value={dashboardData?.projecaoFluxo?.valor}
            icon="💸" 
            color="#FFC107"
            change={dashboardData?.projecaoFluxo?.variacao}
            changeType={dashboardData?.projecaoFluxo?.variacaoTipo}
            footer="Projeção para os próximos 30 dias"
          />
        </div>
      </div>

      <div className="dashboard-chart-container">
        <div className="col-8 col-lg-12">
          <div className="card">
            <div className="chart-header">
              <h2 className="chart-title">Fluxo de Caixa</h2>
              <div>
                <select className="chart-select">
                  <option value="area">Área</option>
                  <option value="bar">Barras</option>
                </select>
              </div>
            </div>
            <Chart type="area" data={fluxoCaixaData} height={320} />
          </div>
        </div>
        <div className="col-4 col-lg-12">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Despesas por Categoria</h2>
            </div>
            <Chart type="pie" data={[]} height={320} />
          </div>
        </div>
      </div>

      <div className="grid" style={{ marginTop: '1.5rem' }}>
        <div className="col-6 col-lg-12">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Contas a Vencer</h2>
              <button className="btn btn-outline" style={{ padding: '0.375rem 0.75rem' }}>Ver todas</button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Vencimento</th>
                  <th>Valor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aluguel do escritório</td>
                  <td>29/04/2025</td>
                  <td>R$ 3.500,00</td>
                  <td><span style={{ color: '#FFC107' }}>⚠️ Amanhã</span></td>
                </tr>
                <tr>
                  <td>Fornecedor XYZ</td>
                  <td>28/04/2025</td>
                  <td>R$ 1.820,00</td>
                  <td><span style={{ color: '#FF5252' }}>🚨 Hoje</span></td>
                </tr>
                <tr>
                  <td>Internet e Telefonia</td>
                  <td>05/05/2025</td>
                  <td>R$ 750,00</td>
                  <td><span style={{ color: '#a0a0a0' }}>Em 7 dias</span></td>
                </tr>
                <tr>
                  <td>Impostos</td>
                  <td>10/05/2025</td>
                  <td>R$ 2.250,00</td>
                  <td><span style={{ color: '#a0a0a0' }}>Em 12 dias</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6 col-lg-12">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Evolução do Saldo</h2>
            </div>
            <Chart type="line" data={[]} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
