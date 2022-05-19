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
  // {
  //   method: "PUT",
  //   url: "/brands",
  //   handler: brandsController.createBrand,
  // },
  // {
  //   method: "DELETE",
  //   url: "/brands",
  //   handler: brandsController.createBrand,
  // },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
