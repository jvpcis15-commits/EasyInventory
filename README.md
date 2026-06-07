EasyInventory

Sistema web para gerenciamento de estoque de produtos, desenvolvido com Node.js, Express e MySQL. A aplicação permite cadastrar, listar, editar e excluir produtos por meio de uma interface simples e integrada a uma API REST.

Objetivo do Projeto

O EasyInventory foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento Full Stack, integração entre Front-end e Back-end, persistência de dados em banco de dados relacional e utilização de boas práticas de desenvolvimento de software.

Ambiente de Desenvolvimento

O projeto foi desenvolvido utilizando:

Sistema Operacional: Windows 11
Editor de Código: Visual Studio Code
Controle de Versão: Git
Repositório Remoto: GitHub
Runtime: Node.js
Gerenciador de Pacotes: npm
Banco de Dados: MySQL (XAMPP)

Tecnologias Utilizadas

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
Testes
Jest
Supertest
Controle de Versão
Git
GitHub

Requisitos do Sistema

Para executar a aplicação é necessário possuir:

Node.js 18 ou superior
npm instalado
MySQL 8.0 ou superior
Navegador atualizado (Chrome, Edge ou Firefox)
Git (opcional)

Estrutura do Projeto

EasyInventory
│
├── backend
│   ├── controllers
│   │   └── productController.js
│   │
│   ├── models
│   │   └── productModel.js
│   │
│   ├── routes
│   │   └── productRoutes.js
│   │
│   ├── tests
│   │   └── product.test.js
│   │
│   ├── database
│   │   └── connection.js
│   │
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   └── script.js
│   │
│   └── index.html
│
└── README.md
🚀 Instalação e Configuração
1️⃣ Clonar o repositório
git clone https://github.com/jvpcis15-commits/EasyInventory.git
2️⃣ Acessar o projeto

cd EasyInventory
Instalar dependências

cd backend
npm install
Configuração do Banco de Dados

Criar o banco
CREATE DATABASE easyinventory;
Selecionar o banco
USE easyinventory;
Criar a tabela
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
⚙️ Configuração das Variáveis de Ambiente

Criar um arquivo .env dentro da pasta backend:

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=sua_senha

DB_NAME=easyinventory

DB_PORT=3306

PORT=3000

Executando a Aplicação

Iniciar o Back-end

Na pasta backend:

node server.js

Saída esperada:

Conectado ao MySQL com sucesso!
Servidor rodando na porta 3000
Iniciar o Front-end

Abra o arquivo:

frontend/index.html

ou utilize a extensão Live Server do Visual Studio Code.

Funcionalidades

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

Práticas de Código Limpo

Durante o desenvolvimento foram aplicadas as seguintes práticas:

Separação de responsabilidades utilizando MVC.
Organização dos arquivos por camadas.
Utilização de nomes descritivos para variáveis e funções.
Reutilização de código.
Estrutura modular.
Uso de variáveis de ambiente.
Padronização das rotas da API.
Facilitação da manutenção e escalabilidade do sistema.
🧪 Testes Automatizados

Foram implementados testes automatizados utilizando Jest e Supertest para validar as operações CRUD da API.

Testes implementados
✔ GET /produtos
✔ POST /produtos
✔ PUT /produtos/:id
✔ DELETE /produtos/:id
Executar os testes
npm test
Localização dos testes
backend/tests/product.test.js

 Padrão de Projeto Utilizado

MVC (Model-View-Controller)

Model

Responsável pela comunicação com o banco de dados.

Controller

Responsável pela lógica de negócio.

View

Responsável pela interface do usuário.

Routes

Responsável pelo gerenciamento dos endpoints da API.

A utilização do padrão MVC proporciona maior organização, reutilização e facilidade de manutenção do código.

Como Contribuir

Faça um Fork do projeto.
Crie uma branch:
git checkout -b minha-feature
Realize suas alterações.
Faça o commit:
git commit -m "Minha nova funcionalidade"
Envie para o GitHub:
git push origin minha-feature
Abra um Pull Request.

 Autor

João Vitor

Projeto acadêmico desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas, aplicando conceitos de desenvolvimento Full Stack, banco de dados, arquitetura MVC e testes automatizados.