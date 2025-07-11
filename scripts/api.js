const URL_BASE = "https://pensamentos-api.onrender.com"; 

const converterData = (dataString) => {
  const [ano, mes, dia] = dataString.split('-');
  return new Date(Date.UTC(ano, mes - 1, dia));
}

const api = {
  async buscarPensamentos() {
    try {
      const res = await axios.get(`${URL_BASE}/pensamentos`);
      const pensamentos = await res.data;
      return pensamentos.map(pensamento => {
        return {...pensamento, data: new Date(pensamento.data)}
      })
    } catch (error) {
      alert('Erro ao buscar pensamentos.');
      throw new Error('Erro ao buscar pensamentos');
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const data = converterData(pensamento.data);
      const response = await axios.post(`${URL_BASE}/pensamentos`, {...pensamento, data: data.toISOString()});
      return response.data;
    } catch (error) {
      alert('Erro ao salvar pensamentos');
      throw error;
    }
  },

  async buscarPensamentosPorId(id) {
    try {
      const res = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      const pensamento = await res.data;
      return { ...pensamento, data: new Date(pensamento.data)}
    } catch (error) {
      alert('Erro ao buscar pensamento.');
      throw new Error('Erro ao buscar o pensamento.');
    }
  },

  async favoritarPensamento(id, favorito) {
    try {
      const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, { favorito });
      return response.data;
    } catch (error) {
      alert('Erro ao favoritar pensamento.');
      throw error;
    }
  },
  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
      return response.data;
    } catch (error) {
      alert('Erro ao editar pensamento.');
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
  },
  async pesquisarPensamentos(termo) {
    try {
      const pensamentos = await this.buscarPensamentos();
      const termoMinusculo = termo.toLowerCase();
      const pensamentosFiltrados = pensamentos.filter(pensamento => {
        return (pensamento.conteudo.toLowerCase().includes(termoMinusculo) || pensamento.autoria.toLowerCase().includes(termoMinusculo))
      })
      return pensamentosFiltrados;
    } catch (error) {
      alert("Erro ao filtrar pensamentos.");
      throw new Error("Erro ao filtrar pensamentos");
    }
  }
};

export default api;
