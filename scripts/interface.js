import api from "./api.js";
const listaPensamentos = document.getElementById('lista-pensamentos');

const ui = {
  async preencherForm(pensamentoId) {
    const pensamento = await api.buscarPensamentosPorId(pensamentoId);
    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
    document.getElementById("pensamento-data").value = pensamento.data.toISOString().split('T')[0];
    document.getElementById("form-container").scrollIntoView();
  },
  async renderizarPensamentos(pensamentosFiltrados = null) {
    const mensagemVazia = document.getElementById("mensagem-vazia");
    listaPensamentos.innerHTML = '';
    let pensamentosParaRenderizar;
    if (pensamentosFiltrados) {
      pensamentosParaRenderizar = pensamentosFiltrados;
    } else {
      pensamentosParaRenderizar = await api.buscarPensamentos();
    }
    try {
      if (pensamentosParaRenderizar.length === 0) {
        mensagemVazia.style.display = "block";
      } else {
        mensagemVazia.style.display = "none";
        pensamentosParaRenderizar.forEach(ui.adicionarPensamento);
      }
    } catch {
      alert("Erro ao renderizar pensamento.");
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
    
    debugger
    const pensamentoData = document.createElement('div');
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'}
    const dataFormatada = new Date(pensamento.data).toLocaleDateString('pt-BR', options);
    pensamentoData.textContent = dataFormatada;
    pensamentoData.classList.add('pensamento-data');
    
    const botaoFavoritar = document.createElement("button");
    botaoFavoritar.classList.add("botao-favorito");
    botaoFavoritar.onclick = async () => {
      try {
        await api.favoritarPensamento(pensamento.id, !pensamento.favorito);
        ui.renderizarPensamentos();
      } catch (error) {
        alert('Erro ao favoritar pensamento.');
        throw error;
      }
    }

    const iconeFavoritar = document.createElement("img");
    iconeFavoritar.src = pensamento.favorito ? "assets/imagens/icone-favorito.png" : "assets/imagens/icone-favorito_outline.png";
    iconeFavoritar.alt = "Favoritar";

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

    botaoFavoritar.appendChild(iconeFavoritar);
    botaoEditar.appendChild(iconeEditar);
    botaoExcluir.appendChild(iconeExcluir);
    icones.append(botaoFavoritar, botaoEditar, botaoExcluir);
    li.append(imgAspas, pensamentoConteudo, pensamentoAutoria, pensamentoData, icones);
    listaPensamentos.append(li);
  },
  cancelarPensamento() {
    const form = document.getElementById('pensamento-form').reset();
  },
  async manipularBusca() {
    const termobusca = document.getElementById('campo-busca').value;
    try {
      const pensamentosFiltrados = await api.pesquisarPensamentos(termobusca);
      ui.renderizarPensamentos(pensamentosFiltrados);      
    } catch (error) {
      alert('Erro ao realizar Busca.')
    }
  }
}

export default ui;