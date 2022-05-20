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
export const updateBrand = async (req, reply) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const brands = await prisma.brand.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        
      },
    });
    reply.send(brands);
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível editar os dados da marca");
  }
};

export const deleteBrand = async (req, reply) => {
try {
  const { id } = req.params;
  const brands = await prisma.brand.delete({
    where: {
      id: Number(id),
    },
  });
  reply.status(200).send("Dados foram excluídos com sucesso!")
} catch (error) {
  console.log(error);
  reply.status(500).send("Não foi possível excluir a marca cadastrada")
  }
};