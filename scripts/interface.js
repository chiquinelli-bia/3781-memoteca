import api from "./api.js";

const listaPensamentos = document.getElementById('lista-pensamentos');
const ui = {
  async renderizarPensamentos() {
    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(ui.adicionarPensamento)
    } catch {
      alert("Erro aoa renderizar pensamento.");
    }
  },
  adicionarPensamento(pensamento) {
    const li = document.createElement('li');
    li.setAttribute('data-id', pensamento.id);
    li.classList.add('li-pensamento');
    const imgAspas = document.createElement('img');
    imgAspas.src = 'assets/imagens/aspas-azuis.png';
    imgAspas.alt = 'Aspas azuis';
    imgAspas.classList.add('icone-aspas');

    const pensamentoConteudo = document.createElement('div');
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add('pensamento-conteudo');

    const pensamentoAutoria = document.createElement('div');
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add('pensamento-autoria');

    li.append(imgAspas, pensamentoConteudo, pensamentoAutoria);
    listaPensamentos.append(li);
  }
}

export default ui;