# frontend-online-store

---

## Sumário

- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Instruções para rodar o projeto](#instruções-para-rodar-o-projeto)
- [Desenvolvimento](#desenvolvimento)
- [Habilidades](#habilidades)
- [Principais Páginas](#principais-páginas)
- [Deploy](#deploy)
- [Contato](#contato)

## O que foi desenvolvido

Criação de uma loja online simplificada, que consuma a API do mercado livre (https://developers.mercadolivre.com.br/pt_br/api-docs-pt-br), mostre os produtos pesquisados e realize uma simulação de um processo de compra.

---

## Instruções para rodar o projeto

1. Clone o repositório

- `git clone git@github.com:thosijulio/frontend-online-store.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd frontend-online-store`

2. Instale as dependências

- `npm install`

4. Rode o projeto:

- `npm start`

---

## Desenvolvimento

Desenvolvi quatro páginas com diferentas rotas e alguns componentes para dividir o código.

Através dessa aplicação, é possível realizar as operações básicas que se pode fazer em um site de busca e compra de produtos: pesquisa, adição ao carrinho, ver detalhes de um determinado produto e ir para a tela de checkout (inserir dados e confirmar compra).

---

## Habilidades

Neste projeto, desenvolvi as seguintes habilidades:

- Compreensão do funcionamento de uma página utilizando React;

- Organização de rotas utilizando a biblioteca React Router;

- Fazer deploy utilizando o gh-pages;

- Utilização da Font Awesome para utilização de ícones.

---

## Principais páginas

### Página de pesquisa (/)

- Nessa tela é possível:
  -  Pesquisar por texto ou categoria. Caso nenhum produto seja encontrado, retorne um texto indicando;
  -  Ver detalhes de algum produto pesquisado;
  -  Adicionar produto ao carrinho;
  -  Ir para a tela de carrinho.

### Página de Carrinho de compras (/cart-shopping):
- Nessa tela é possível:
  - Ver o nome, imagem, preço, quantidade e preço total de cada item;
  - Adicionar ou remover quantidade de determinado item;
  - Retirar item do carrinho;
  - Voltar para a tela inicial ou seguir para a tela de pagamento.

### Página de detalhes de um produto (/product/${id}):
- Nessa tela é possível:
  - Ver informações detalhadas de um pedido;
  - Voltar para a tela inicial ou ir para a tela de carrinho de compras.

### Página de checkout (/checkout):
- Nessa tela é possível:
  - Inserir o endereço de entrega;
  - Inserir o método de pagamento;
  - Confirmar e finalizar pedido.

## Deploy
  O deploy foi feito utilizando o git-hub pages. É possível acessar o site através do link: https://thosijulio.github.io/frontend-online-store

---

## Contato
Caso surga alguma dúvida, comentário ou sugestão sobre o projeto, não hesite em me contactar:
<p align=center>
Linkedin:<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
Github:<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
Instagram:<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
