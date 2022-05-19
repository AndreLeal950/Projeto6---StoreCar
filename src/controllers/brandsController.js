import { prisma } from "../helpers/utils.js";

export const getAllBrands = async (request, reply) => {
  try {
    const brands = await prisma.brand.findMany();
    return brands;
  } catch (error) {
    console.log(error);
    return reply.status(500).send("Nenhuma marca de carro cadastrada");
  }
};

export const createBrands = async (req, reply) => {
  try {
    
    const { name } = req.body;
    const brands = await prisma.brand.create({ data: { name }});
    reply.send(brands)
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível cadastrar a marca");
  }
};
