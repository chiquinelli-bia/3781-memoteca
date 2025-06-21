const api = {
  async buscarPensamentos() {
    try {
      const res = await fetch('http://localhost:3000/pensamentos');
      return await res.json();
    } catch {
      alert('erro ao buscar pensamentos.');
      throw new Error('Erro ao buscar pensamentos');
    }
  }
}
export default api;