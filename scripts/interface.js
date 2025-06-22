import api from "./api.js";

const ui = {
  async renderizarPensamentos() {
    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(ui.adicionarPensamento)
      pensamentos.forEach(ui.adicionarPensamento)
    } catch {
      alert("Erro ao renderizar pensamento.");
    }
  },
  adicionarPensamento(pensamento) {
    const listaPensamentos = document.getElementById('lista-pensamentos');
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
  },
  cancelarPensamento() {
    const form = document.getElementById('pensamento-form').reset();
  }
}

export default ui;