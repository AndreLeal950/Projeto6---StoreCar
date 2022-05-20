// import fastify from "fastify";
import * as brandsController from "../controllers/brandsController.js";
import multer from "fastify-multer";
import path from "path";

const routes = [
  {
    method: "GET",
    url: "/brands",
    handler: brandsController.getAllBrands,
  },
  {
    method: "POST",
    url: "/brands",
    handler: brandsController.createBrands,
  },
  {
    method: "PUT",
    url: "/brands/:id",
    handler: brandsController.updateBrand,
  },

  {
    method: "DELETE",
    url: "/brands/:id",
    handler: brandsController.deleteBrand,
  }
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
