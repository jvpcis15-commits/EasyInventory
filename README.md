EasyInventory
Descrição do Projeto

O EasyInventory é uma aplicação web para gerenciamento de estoque de produtos. O sistema permite cadastrar, listar, editar e excluir produtos, armazenando as informações em um banco de dados MySQL.

O projeto foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento Full Stack, integração entre front-end e back-end, utilização de banco de dados relacional, controle de versão com Git e aplicação de boas práticas de desenvolvimento de software.

Ambiente de Desenvolvimento

O projeto foi desenvolvido utilizando o seguinte ambiente:

Sistema Operacional: Windows 11
Editor de Código: Visual Studio Code
Controle de Versão: Git
Repositório Remoto: GitHub
Ambiente de Execução: Node.js
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

Node.js versão 18 ou superior
npm instalado
MySQL 8.0 ou superior
Navegador web atualizado (Google Chrome, Microsoft Edge ou Mozilla Firefox)
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
Instalação e Configuração
1. Clonar o Repositório
git clone https://github.com/jvpcis15-commits/EasyInventory.git
2. Acessar o Projeto
cd EasyInventory
3. Instalar Dependências

Acesse a pasta backend:

cd backend
npm install
4. Criar o Banco de Dados

Execute os comandos abaixo no MySQL:

CREATE DATABASE easyinventory;

USE easyinventory;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
5. Configurar Variáveis de Ambiente

Crie um arquivo .env na pasta backend:

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
Utilização de nomes claros para variáveis, funções e arquivos.
Reutilização de funções para evitar duplicação de código.
Estrutura modular para facilitar manutenção.
Uso de variáveis de ambiente para informações sensíveis.
Padronização das rotas da API REST.
Comentários em trechos importantes do código.

Essas práticas tornam o sistema mais organizado, legível e fácil de manter.

Testes Automatizados

Foram implementados testes automatizados utilizando Jest e Supertest para validar o funcionamento da API REST.

Os testes desenvolvidos verificam as principais operações CRUD da aplicação:

GET /produtos – Listagem de produtos.
POST /produtos – Cadastro de produtos.
PUT /produtos/ – Atualização de produtos.
DELETE /produtos/ – Exclusão de produtos.

Para executar os testes:

npm test

Os testes estão localizados em:

backend/tests/product.test.js

A utilização de testes automatizados contribui para a qualidade do software, permitindo identificar falhas rapidamente durante futuras alterações.

Padrão de Projeto Utilizado

O projeto utiliza o padrão arquitetural MVC (Model-View-Controller).

Model

Responsável pelo acesso aos dados e comunicação com o banco MySQL.

Controller

Responsável pela lógica de negócio e processamento das requisições.

View

Responsável pela interface gráfica desenvolvida com HTML, CSS e JavaScript.

Routes

Responsável pelo mapeamento dos endpoints da API.

A utilização do padrão MVC promove melhor organização, manutenção e escalabilidade da aplicação.

Como Contribuir
Faça um Fork do projeto.
Crie uma branch para sua funcionalidade:
git checkout -b minha-feature
Realize suas alterações.
Faça o commit das modificações:
git commit -m "Minha nova funcionalidade"
Envie para o GitHub:
git push origin minha-feature
Abra um Pull Request para análise.
Autor

João Vitor

Projeto acadêmico desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar conceitos de desenvolvimento Full Stack, integração com banco de dados, arquitetura MVC e testes automatizados.