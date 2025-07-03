![Thumbnail](./Front-end-Memoteca%20-%20aplicativo%20organizador%20de%20pensamentos%20e%20frases.png)

# Memoteca

Estrutura inicial do projeto criada a partir do curso "JavaScript: implementando CRUD com requisições HTTP" da Alura e evoluído com o curso "JavaScript: evoluindo a sua aplicação com ES6+". Memoteca é um aplicativo organizador de pensamentos e frases que permite cadastrar, listar, editar favoritar e deletar pensamentos, incluindo informações como conteúdo, autoria e data.

Agora funcionalidades do ES6+, como a implementação de uma busca Typeahead(que sugere automaticamente opções enquanto o usuário digita em um campo de texto.), validação de campos com regex, opção de favoritar pensamentos marcantes e adição de data.

## 🔨 Funcionalidades do projeto

`Cadastro de pensamentos`: Permite adicionar novos pensamentos à lista, inserindo informações como conteúdo e autoria e data.

`Listagem de pensamentos`: Exibe os pensamentos cadastrados, permitindo visualizar o texto e a autoria e pensamentos favoritos.

`Edição de pensamentos`: Permite editar pensamentos existentes, atualizando as informações conforme necessário.

`Exclusão de pensamentos`: Permite remover pensamentos da lista.

`Pesquisa typeahead`: Busca de pensamentos com sugestões de autocomplete.

## ✔️ Técnicas e tecnologias utilizadas

🧪 Tecnologias:
- **HTML5 e CSS3** para a estrutura e estilização da interface;
- **JavaScript** Linguagem de programação utilizada para desenvolver a lógica do aplicativo;
- **Módulos JavaScript** (import/export) para organização do código.

⚙️ Técnicas e Funcionalidades Aplicadas:
- `Comunicação Cliente-Servidor` : Estudo do modelo cliente-servidor para entender o fluxo das requisições e respostas HTTP;
- `JSON Server` : Utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD;
- `Fetch API` : Utilizada para realizar requisições HTTP com os métodos GET, POST, PUT e DELETE, incluindo o uso de headers e body;
- `Axios` : Biblioteca alternativa ao Fetch para realizar requisições HTTP de forma mais simples e com menos código;
- `Inspeção de Requisições` : Análise de respostas, cabeçalhos (headers) e códigos de status HTTP para depuração e verificação do funcionamento da API;
- `Node.js` : Plataforma utilizada para executar o ambiente de desenvolvimento;
- `Manipulação de Datas` : Uso do objeto Date para armazenar, formatar e exibir datas corretamente;
- `Regex` : Validação de dados com expressões regulares, garantindo consistência com métodos como Set, trim, toLowerCase e test;
- `Pesquisa Typeahead` : Sugestão automática de opções conforme o usuário digita, utilizando métodos como filter e includes.

## ☁️ Hospedagem da API na Render

Para disponibilizar a API de pensamentos para o front-end de forma pública e acessível, a API foi hospedada no serviço Render. Diferente do ambiente local, onde usamos o JSON Server rodando na máquina local, o Render permite que a API esteja sempre online, pronta para receber requisições reais da aplicação em produção.

## 🛠️ Abrir e rodar o projeto

Para executar a API fake, você vai precisar do NodeJS; a versão utilizada foi a 20.12.2.

Instale o JSON Server globalmente (se ainda não estiver instalado):

```bash
npm install -g json-server
```

Para executar, abra um novo terminal e, dentro da pasta backend, execute:

```bash
npm start
```

Acesse o backend localmente em seu navegador:

http://localhost:3000

Para executar o frontend, abra o projeto no Visual Studio Code. Com a extensão Live Server instalada, clique com o botão direito no arquivo index.html e selecione "Open with Live Server" no menu de contexto.

Você também pode [ acessar a Memoteca através deste link](https://3781-memoteca.vercel.app/)
