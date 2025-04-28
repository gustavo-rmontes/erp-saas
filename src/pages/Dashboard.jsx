
import { useState } from 'react';
import DashboardCard from '../components/Dashboard/DashboardCard';
import Chart from '../components/Dashboard/Chart';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');

  // Dados fictícios para os gráficos
  const fluxoCaixaData = [
    { name: 'Jan', receitas: 15000, despesas: 12000 },
    { name: 'Fev', receitas: 16200, despesas: 13500 },
    { name: 'Mar', receitas: 14800, despesas: 12800 },
    { name: 'Abr', receitas: 18000, despesas: 14500 },
    { name: 'Mai', receitas: 17200, despesas: 14000 },
    { name: 'Jun', receitas: 19500, despesas: 15000 },
    { name: 'Jul', receitas: 20100, despesas: 16000 },
  ];

  const saldoData = [
    { name: 'Jan', saldo: 3000 },
    { name: 'Fev', saldo: 2700 },
    { name: 'Mar', saldo: 2000 },
    { name: 'Abr', saldo: 3500 },
    { name: 'Mai', saldo: 3200 },
    { name: 'Jun', saldo: 4500 },
    { name: 'Jul', saldo: 4100 },
  ];

  const despesasCategoriasData = [
    { name: 'Pessoal', value: 8500 },
    { name: 'Marketing', value: 2300 },
    { name: 'Operacional', value: 3500 },
    { name: 'Impostos', value: 4200 },
    { name: 'Outros', value: 1500 },
  ];

  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.5rem' 
      }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '600' }}>Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
            value="R$ 32.540,75" 
            icon="💰" 
            color="#1ebcc3"
            change="12% em relação ao mês anterior" 
            changeType="positive"
            footer="Atualizado: 28/04/2025 12:45"
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Contas a Pagar" 
            value="R$ 8.320,00" 
            icon="📉" 
            color="#FF5252"
            change="3 vencendo hoje" 
            footer="Próximo vencimento: 29/04/2025"
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Contas a Receber" 
            value="R$ 15.750,00" 
            icon="📈" 
            color="#4CAF50"
            change="2 recebimentos hoje" 
            changeType="positive"
            footer="Próximo recebimento: 30/04/2025"
          />
        </div>
        <div className="col-3 col-lg-6 col-md-12">
          <DashboardCard 
            title="Projeção de Fluxo" 
            value="R$ 5.430,00" 
            icon="💸" 
            color="#FFC107"
            change="8% em relação ao mês anterior" 
            changeType="positive"
            footer="Projeção para os próximos 30 dias"
          />
        </div>
      </div>

      <div className="grid" style={{ marginTop: '1.5rem' }}>
        <div className="col-8 col-lg-12">
          <div className="card" style={{ height: '400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Fluxo de Caixa</h2>
              <div>
                <select 
                  style={{
                    backgroundColor: '#252525',
                    border: '1px solid #333',
                    color: '#f8f9fa',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '4px'
                  }}
                >
                  <option value="area">Área</option>
                  <option value="bar">Barras</option>
                </select>
              </div>
            </div>
            <Chart type="area" data={fluxoCaixaData} height={320} />
          </div>
        </div>
        <div className="col-4 col-lg-12">
          <div className="card" style={{ height: '400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: '500' }}>Despesas por Categoria</h2>
            </div>
            <Chart type="pie" data={despesasCategoriasData} height={320} />
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
            <Chart type="line" data={saldoData} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
