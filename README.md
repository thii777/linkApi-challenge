# Challenge LinkApi

Esse teste consiste em: fazer uma integraçao de um orçamento ganho no Pipedrive, inserindo o mesmo como venda no Bling.

## Como rodar a aplicação:

- Clone ou faça o download do projeto;
- No terminal acesse a pasta raiz do projeto e use :
  `npm install`
- Para iniciar o projeto : 
`npm start`

## Logica

* Nessa aplicação foi usado o patrão MVC
* No controller criei um map para chamar os dados da API
* Apos fazer a requisição dos dados, os mesmos são enviado para a database do mongoDB
* Um endpoint chamado budget foi criado para trazer as informações do banco de dados
* O fluxo não está completo, pois não consegui gerar a key na empresa Bling, onde a mesma exige uma homologação previa para disponibilizar o método GET /pedidos
* Foi implementado um teste de integração com a api do pipedrive, a biblioteca usada foi Jestjs. 

* A chave de acesso da api pipedrive encontrasse no ultimo paramêtro da rota
* Os orçamentos ganhos encontrasse no mongo DB
* A chave do cluster foi enviada junto com a aplicação
