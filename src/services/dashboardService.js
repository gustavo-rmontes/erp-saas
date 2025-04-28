
import api from './api';

export const getDashboardData = async () => {
  try {
    const [saldoResponse, contasPagarResponse, contasReceberResponse, fluxoResponse] = await Promise.all([
      api.get('/saldo-consolidado'),
      api.get('/contas-pagar/resumo'),
      api.get('/contas-receber/resumo'),
      api.get('/fluxo-caixa/projecao')
    ]);

    return {
      saldoConsolidado: saldoResponse.data,
      contasPagar: contasPagarResponse.data,
      contasReceber: contasReceberResponse.data,
      projecaoFluxo: fluxoResponse.data
    };
  } catch (error) {
    console.error('Erro ao buscar dados do dashboard:', error);
    throw error;
  }
};

export const getFluxoCaixaData = async () => {
  try {
    const response = await api.get('/fluxo-caixa');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados de fluxo de caixa:', error);
    throw error;
  }
};
