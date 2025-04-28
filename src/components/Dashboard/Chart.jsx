
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#252525',
        border: '1px solid #333',
        padding: '0.625rem',
        borderRadius: '4px'
      }}>
        <p style={{ color: '#f8f9fa', marginBottom: '0.25rem' }}>{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color || '#1ebcc3' }}>
            {`${entry.name}: R$ ${entry.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const Chart = ({ type, data, height = 300 }) => {
  const renderChart = () => {
    switch (type) {
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5252" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF5252" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="receitas" name="Receitas" stroke="#4CAF50" fillOpacity={1} fill="url(#colorReceitas)" />
            <Area type="monotone" dataKey="despesas" name="Despesas" stroke="#FF5252" fillOpacity={1} fill="url(#colorDespesas)" />
          </AreaChart>
        );
        
      case 'bar':
        return (
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="receitas" name="Receitas" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="despesas" name="Despesas" fill="#FF5252" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
        
      case 'line':
        return (
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#a0a0a0" />
            <YAxis stroke="#a0a0a0" />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="saldo" name="Saldo" stroke="#1ebcc3" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        );
        
      case 'pie':
        const COLORS = ['#4CAF50', '#FF5252', '#FFC107', '#1ebcc3', '#7E57C2'];
        
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        );
        
      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
