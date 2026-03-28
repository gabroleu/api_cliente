import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerController } from '../src/controllers/CreateCustomerController'
import { ListCustomersController } from './controllers/ListCustomersController'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){ //declarando uma função plugin do Fastify

    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => { //registrando uma rota GET no endpoint
        return {ok: true} //retornando um objeto JSON como resposta HTTP


    })

    fastify.post("/customer", async ( request: FastifyRequest, reply:FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)

    })

    fastify.get("/customers", async ( request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)

})

 fastify.delete("/customer", async ( request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)

})

}