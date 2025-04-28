
import api from './api';

export const getContasPagar = async () => {
  try {
    const response = await api.get('/contas-pagar');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar contas a pagar:', error);
    throw error;
  }
};

export const createContaPagar = async (conta) => {
  try {
    const response = await api.post('/contas-pagar', conta);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar conta a pagar:', error);
    throw error;
  }
};

export const updateContaPagar = async (id, conta) => {
  try {
    const response = await api.put(`/contas-pagar/${id}`, conta);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar conta a pagar:', error);
    throw error;
  }
};

export const deleteContaPagar = async (id) => {
  try {
    await api.delete(`/contas-pagar/${id}`);
  } catch (error) {
    console.error('Erro ao deletar conta a pagar:', error);
    throw error;
  }
};
