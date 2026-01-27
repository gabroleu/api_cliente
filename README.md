# API Cliente – Gerenciamento de Clientes

Projeto fullstack para gerenciamento de clientes, composto por um **backend em Node.js com Fastify** e um **frontend em React.js com TypeScript**, seguindo boas práticas de APIs REST e separação de responsabilidades.

O objetivo é fornecer uma base sólida para estudos, portfólio e evolução para um produto real.

---

> Visão Geral

A aplicação permite:
- Cadastro de clientes
- Listagem de clientes cadastrados
- Exclusão de clientes por identificador único

Toda a comunicação entre frontend e backend é realizada via **API REST**.

---

> Arquitetura

```text
api-cliente/
├── backend/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    ├── package.json
    └── tsconfig.json


---

> Tecnologias Utilizadas

### Backend
- **Node.js**
- **TypeScript**
- **Fastify**
- **API REST**
- **Banco de Dados** (persistência de dados dos clientes)

### Frontend
- **React.js**
- **TypeScript**
- **Consumo de API REST**
- **Componentização e estado**



### Backend (API)
   - Criar API REST utilizando **Fastify**
   - Comunicação com banco de dados
   - Cadastrar novo cliente com:
   - Nome
   - Email
   - Status
   - Listar clientes cadastrados
   - Deletar cliente com base em um **ID**

### Frontend (Web)
  - Consumir a API REST
  - Listar todos os clientes cadastrados
  - Cadastrar novo cliente informando:
  - Nome
  - Email
  - Deletar cliente existente


