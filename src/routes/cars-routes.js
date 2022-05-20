import fastify from "fastify";
import * as carsController from "../controllers/carsController.js";
import multer from "fastify-multer";
import path from "path";


const storage = multer.diskStorage({
  destination: (req, reply, callback) => {
    callback(null, "public/images");
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    callback(null, file.originalname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/cars",
    handler: carsController.getAllCars,
  },
  {
    method: "POST",
    url: "/cars",
    preHandler: upload.single("cover"),
    handler: carsController.createCar,
  },
  {
    method: "PUT",
    url: "/cars/:id",
    handler: carsController.updateCar,
  },
  
  {
    method: "DELETE",
    url: "/cars/:id",
    handler: carsController.deleteCar,
  }

];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
