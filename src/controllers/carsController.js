import { prisma } from "../helpers/utils.js";

export const getAllCars = async (request, reply) => {
  try {
    const cars = await prisma.car.findMany();
    
    return cars;
  } catch (error) {
    console.log(error);
    return reply.status(500).send("Nenhum carro cadastrado");
  }
};

export const createCar = async (req, reply) => {
  try {
   
    const { name, year, brand_id } = req.body;
    const cars = await prisma.car.create({
      data: {
        name,
        year,
        brand: {
          connect: { id: Number(brand_id) },
        },
         cover: req.file.path, 
     },
    });

    reply.send(cars)
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível cadastrar o carro");
  }
};

export const updateCar = async (req, reply) => {
  try {
    const { name, year, brand, brand_id } = req.body;
    const { id } = req.params;
    const cars = await prisma.car.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        year,
        brand: { 
          connect: { id: Number(brand_id)}
        }
      },
    });
    reply.send(cars);
  } catch (error) {
    console.log(error);
    reply.status(400).send("Não foi possível editar os dados do carro.");
  }
};

export const deleteCar = async (req, reply) => {
  try {
    const { id } = req.params;
    const cars = await prisma.car.delete({
      where: {
        id: Number(id),
      },
    })
    reply.status(200).send( "Dados foram excluídos com sucesso!" )
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível excluir o carro cadastrado")
    }
  };