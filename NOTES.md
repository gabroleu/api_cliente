# Anotações do Projeto – API Cliente

## Ideias
- Criar CRUD completo de clientes
- Adicionar validação
- Documentar API 

## Decisões Técnicas
- Fastify ao invés de Express (performance)
- Prisma como ORM
- MongoDB Atlas como banco

## Pendências
- Refatorar rotas
- Criar camada de service
- Testes automatizados

## Bugs / Dúvidas
- [ ] Verificar tratamento de erros globais



-- foi instalado o prisma 
rodar a api localhost:3333/teste  ::: npm run dev 

agora vou criar uma rota para poder criar um novo cliente, para cadastrar o cliente novo, então é aqui que começo a rodar a api

24:43 (ok)


















- Backend
> criar api rest com fastify (ok)
> comunicar com banco de dados (ok)
> cadastrar novo cliente com nome, email e status
> listar todos os clientes cadastrados
> deletar um cliente com base em um id