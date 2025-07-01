import api from "./api.js";
import ui from "./interface.js";

const formPensamento = document.getElementById('pensamento-form');
const inputBusca = document.getElementById('campo-busca');

document.addEventListener('DOMContentLoaded', () => {
  ui.renderizarPensamentos();
  formPensamento.addEventListener('submit', submitForm);

  async function submitForm(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;
    const data = document.getElementById('pensamento-data').value;

    if (!validarData(data)) {
      alert("Não é permitido o cadastro de datas futuras. Selecione outra data")
      return
    }
    try {
      if (id) {
        await api.editarPensamento({ id, conteudo, autoria, data });        
      } else {
        await api.salvarPensamento({ conteudo, autoria, data });        
      }
      ui.renderizarPensamentos();
    } catch {
      alert('Erro ao salvar pensamento.')
    }
  }
  const btnCancelar = document.getElementById('botao-cancelar');
  btnCancelar.addEventListener('click', ui.cancelarPensamento);
  inputBusca.addEventListener('input', ui.manipularBusca);

  function validarData(data) {
    const dataAtual = new Date()
    const dataInserida = new Date(data)
    return dataInserida <= dataAtual
  }

})