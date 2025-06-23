import api from "./api.js";

const ui = {
  async preencherForm(pensamentoId) {
    const pensamento = await api.buscarPensamentosPorId(pensamentoId);
    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;

  },
  async renderizarPensamentos() {
    try {
      const pensamentos = await api.buscarPensamentos();
      document.getElementById('lista-pensamentos').innerHTML = ''; 
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

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.onclick = () => ui.preencherForm(pensamento.id);

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.onclick = async () => {
      try {
        await api.excluirPensamento(pensamento.id);
        ui.renderizarPensamentos();
      } catch (error) {
        alert("Erro ao excluir pensamento")
      }
    };

    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Excluir";
    const icones = document.createElement("div");
    icones.classList.add("icones");

    botaoEditar.appendChild(iconeEditar);
    botaoExcluir.appendChild(iconeExcluir);
    icones.append(botaoEditar, botaoExcluir);
    li.append(imgAspas, pensamentoConteudo, pensamentoAutoria, icones);
    listaPensamentos.append(li);
  },
  cancelarPensamento() {
    const form = document.getElementById('pensamento-form').reset();
  }
}

export default ui;