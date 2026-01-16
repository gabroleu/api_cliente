import Fastify from "fastify"; //importando a factory function do fastify (performancce)
import {routes} from './routes'
import cors from '@fastify/cors'

const app = Fastify({logger: true}) //criando a instância do servidor Fastify (ativa o log interno, faz o Fastify logar automaticamente)

const start = async () => { //definindo uma função assícrona responsável por subir o servidor (controle de erro, facilita testes)
    
    await app.register(cors);
    await app.register(routes);

    try{ //iniciando um bloco de tratamento de erro
        await app.listen({port: 3333}) //iniciando o servidor na porta 3333 (await bloqueia a execução até o servidor realmente subir)
    }catch(err){ //capturando qualquer erro ocorrido durante o bootstrap do servidor
        process.exit(1) //finaliza o processo com código de erro
    }
}

start();