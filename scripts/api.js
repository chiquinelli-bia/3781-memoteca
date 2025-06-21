const api = {
    async buscarPensamentos() {
        try {
            const res = await fetch('http://localhost:3000/pensamentos');
            return res.json();
        } catch {
            alert('erro ao buscar pensamentos.');
        }
    }
}
 export default api;