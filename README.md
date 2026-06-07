EasyInventory
Descrição do Projeto

O EasyInventory é uma aplicação web desenvolvida para gerenciamento de estoque de produtos. O sistema permite cadastrar, listar, editar e excluir produtos, armazenando as informações em um banco de dados MySQL.

O objetivo do projeto é aplicar conceitos de desenvolvimento web Full Stack, integrando uma interface simples com uma API REST desenvolvida em Node.js e um banco de dados relacional.

Ambiente de Desenvolvimento

O projeto foi desenvolvido utilizando:

Sistema Operacional: Windows 11

Editor de Código: Visual Studio Code

Controle de Versão: Git

Repositório Remoto: GitHub

Ambiente de Execução: Node.js

Banco de Dados: MySQL (XAMPP)

=======Tecnologias Utilizadas=======

Front-end
HTML5
CSS3
JavaScript

Back-end
Node.js
Express.js
CORS
Dotenv

Banco de Dados
MySQL

Controle de Versão
Git
GitHub

============Requisitos do Sistema===============

Para executar a aplicação é necessário possuir:

Node.js versão 18 ou superior;
npm instalado;
MySQL 8.0 ou superior;
Navegador web atualizado (Chrome, Edge ou Firefox);
Git (opcional);
Instalação e Execução;

1. Clonar o repositório
git clone https://github.com/jvpcis15-commits/EasyInventory.git

2. Acessar a pasta do projeto
cd EasyInventory

3. Instalar as dependências

Na pasta backend:

npm install
4. Criar o banco de dados
CREATE DATABASE easyinventory;

Selecionar o banco:

USE easyinventory;

Criar a tabela:

CREATE TABLE produtos (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5. Configurar o arquivo .env

Criar um arquivo .env dentro da pasta backend:

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=sua_senha

DB_NAME=easyinventory

DB_PORT=3306

PORT=3000

6. Executar o servidor

Na pasta backend:

node server.js

Mensagem esperada:

Conectado ao MySQL com sucesso!
Servidor rodando na porta 3000
7. Executar o Front-end

Abrir o arquivo:

frontend/index.html

ou utilizar a extensão Live Server do Visual Studio Code.

=========Funcionalidades===========
Requisitos Funcionais

RF01 – Cadastrar produtos

RF02 – Listar produtos cadastrados

RF03 – Editar informações dos produtos

RF04 – Excluir produtos

RF05 – Armazenar dados em banco de dados

RF06 – Exibir mensagens de confirmação ao usuário

Requisitos Não Funcionais

RNF01 – Interface simples e responsiva

RNF02 – Tempo de resposta adequado

RNF03 – Organização do código utilizando boas práticas

=========Estrutura do Projeto===========

EasyInventory
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── database
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── css
│   ├── js
│   └── index.html
│
└── README.md
===========Práticas de Código Limpo==============

Durante o desenvolvimento foram aplicadas as seguintes práticas:

Separação das responsabilidades utilizando o padrão MVC.
Organização do código em pastas específicas.
Utilização de nomes claros para variáveis e funções.
Reutilização de funções sempre que possível.
Padronização das rotas da API.
Uso de variáveis de ambiente para informações sensíveis.
Estrutura modular para facilitar manutenção e evolução do sistema.
Testes da Aplicação

Foram realizados testes manuais para validar as funcionalidades principais:

Cadastro de produtos.

Listagem de produtos.

Atualização de produtos.

Exclusão de produtos.

===========Integração entre Front-end, API e banco de dados.==========

Atualmente o projeto não possui testes automatizados implementados. Como melhoria futura, podem ser utilizados frameworks como Jest e Supertest para automatizar os testes da API.

===========Padrão de Projeto Utilizado==============

O projeto utiliza o padrão arquitetural MVC (Model-View-Controller).

Model: responsável pelo acesso e manipulação dos dados no banco.
Controller: responsável pela lógica da aplicação.
View: responsável pela interface apresentada ao usuário.

Esse padrão melhora a organização do código e facilita a manutenção do sistema.

Como Contribuir
Faça um Fork do projeto.
Crie uma branch para suas alterações:
git checkout -b minha-feature
Realize as modificações necessárias.
Faça o commit:
git commit -m "Descrição da alteração"
Envie para o GitHub:
git push origin minha-feature
Abra um Pull Request para análise.
Autor

João Vitor

Projeto acadêmico desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar conceitos de desenvolvimento Full Stack, integração com banco de dados e arquitetura MVC.
