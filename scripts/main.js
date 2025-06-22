import api from "./api.js";
import ui from "./interface.js";

const formPensamento = document.getElementById('pensamento-form');

document.addEventListener('DOMContentLoaded', () => {
  ui.renderizarPensamentos();
  formPensamento.addEventListener('submit', submitForm);

  async function submitForm(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;

    try {
      await api.salvarPensamento({ conteudo, autoria});
      ui.renderizarPensamentos();
    } catch {
      alert('Erro ao salvar pensamento.')
    }
  }
})