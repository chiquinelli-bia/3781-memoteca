const URL_BASE = "http://localhost:3000"; 
const api = {
  async buscarPensamentos() {
    try {
      const res = await axios.get(`${URL_BASE}/pensamentos`);
      return res.data;
    } catch (error) {
      alert('Erro ao buscar pensamentos.');
      throw new Error('Erro ao buscar pensamentos');
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      return response.data;
    } catch (error) {
      alert('Erro ao salvar pensamentos');
      throw error;
    }
  },

  async buscarPensamentosPorId(id) {
    try {
      const res = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return res.data;
    } catch (error) {
      alert('Erro ao buscar pensamento.');
      throw new Error('Erro ao buscar o pensamento');
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
      return response.data;
    } catch (error) {
      alert('Erro ao editar pensamento');
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch (error) {
      alert('Erro ao excluir o pensamento');
      throw error;
    }
  }
};

export default api;
