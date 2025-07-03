import api from "./api.js";
import ui from "./interface.js";

const pensamentosSet = new Set()
async function adicionarChavePensamento() {
  try {
    const pensamentos = await api.buscarPensamentos();
    pensamentos.forEach(pensamento => {
      const chavePensamento = `${pensamento.conteudo.trim().toLowerCase()}-${pensamento.autoria.trim().toLowerCase()}`;
      pensamentosSet.add(chavePensamento);
    });
  } catch (error) {
    alert('Erro ao adicionar chave ao pensamento.');
  }
}

const formPensamento = document.getElementById('pensamento-form');
const inputBusca = document.getElementById('campo-busca');

document.addEventListener('DOMContentLoaded', () => {
  ui.renderizarPensamentos();
  adicionarChavePensamento();
  formPensamento.addEventListener('submit', submitForm);
  
  async function submitForm(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;
    const data = document.getElementById('pensamento-data').value;
    
    if (!validarForms(regexContent, conteudo, null)) {
      alert('É permitida a inclusão apenas de letras e espaços com no mínimo 10 caracteres.');
      return
    }
    if (!validarForms(regexAuthor, autoria, null)) {
      alert('É permitida a inclusão apenas de letras e espaços, com 3 a 30 caracteres.');
      return
    }
    if (!validarForms(null, null, data)) {
      alert('Não é permitido o cadastro de datas futuras. Selecione outra data.');
      return
    }
    const chaveNovoPensamento = `${conteudo.trim().toLowerCase()}-${autoria.trim().toLowerCase()}`
     if(pensamentosSet.has(chaveNovoPensamento)) {
       alert('Esse pensamento já existe')
       return
     }    
    ui.cancelarPensamento();
    try {
      if (id) {
        await api.editarPensamento({ id, conteudo, autoria, data });        
      } else {
        await api.salvarPensamento({ conteudo, autoria, data }); 
        pensamentosSet.add(chaveNovoPensamento);       
      }
      ui.renderizarPensamentos();
    } catch {
      alert('Erro ao salvar pensamento.')
    }
  }
  const btnCancelar = document.getElementById('botao-cancelar');
  btnCancelar.addEventListener('click', ui.cancelarPensamento);
  inputBusca.addEventListener('input', ui.manipularBusca);
})
const regexContent = /^[\p{L}\p{P}\p{Zs}]{10,}$/u;
const regexAuthor = /^[\p{L}\p{Zs}]{3,30}$/u;
function validarForms(regex, conteudo, data) {
   if (data) {
    const dataAtual = new Date()
    const dataInserida = new Date(data)
    return dataInserida <= dataAtual
  } else {
    return regex.test(conteudo);
  }
}