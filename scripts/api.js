const api = {
  async buscarPensamentos() {
    try {
      const res = await fetch('http://localhost:3000/pensamentos');
      return await res.json();
    } catch {
      alert('erro ao buscar pensamentos.');
      throw new Error('Erro ao buscar pensamentos');
    }
  },
  async salvarPensamento(pensamento) {
    try {
      const response = await fetch('http://localhost:3000/pensamentos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      })
      return await response.json()
    }
    catch {
      alert('Erro ao salvar pensamentos')
      throw error
    }
  },
  async buscarPensamentosPorId(id) {
    try {
      const res = await fetch(`http://localhost:3000/pensamentos/${id}`);
      return await res.json();
    } catch {
      alert('erro ao buscar pensamentos.');
      throw new Error('Erro ao buscar o pensamento');
    }
  },
  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      })
      return await response.json()
    }
    catch {
      alert('Erro ao editar pensamento')
      throw error
    }
  },
  async excluirPensamento(id) {
    try {
      await fetch(`http://localhost:3000/pensamentos/${id}`, {
        method: "DELETE",
      })
    }
    catch {
      alert('Erro ao excluir o pensamento')
      throw error
    }
  }
}
export default api;
