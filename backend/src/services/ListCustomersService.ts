import prismaClient from "../prisma";

class ListCustomersService{
    async execute(){

        const customers = await prismaClient.customer.findMany() //buscar todos os clientes do banco ()
        
        return customers;
    }

}

export { ListCustomersService }