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
    
    const { name, year, brand_id, image } = req.body;
    const cars = await prisma.car.create({
      data: {
        name,
        year,
        brand: {
          connect: { id: Number(brand_id) },
        },
        // cover: req.file.path, 
        image
      },
    });


export const updateCar = async (req, reply) => {
      try {
        const { id } = req.params;
        const cars = await prisma.car.update({
          where: { id: Number(id) },
          data: { published: true },
        })
        resizeBy.json(cars);
      } catch (error) {
        console.log(error);
        return reply.status(500).send("Nenhum carro pode ser Editado")
    
      }
    };

    reply.send(cars)
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível cadastrar o carro");
  }
};
