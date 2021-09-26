module.exports = app => {
    const products = require("../controllers/product.controller.js");
    const { authJwt } = require("../middlewares");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/",[authJwt.verifyToken], products.create);
  
    // Retrieve all products
    router.get("/",[authJwt.verifyToken], products.findAll);
  
    // Retrieve all active products
    router.get("/active",[authJwt.verifyToken], products.findAllActive);
  
    // Retrieve a single Product with id
    router.get("/:id",[authJwt.verifyToken], products.findOne);
  
    // Update a Product with id
    router.put("/:id",[authJwt.verifyToken], products.update);
  
    // Delete a Product with id
    router.delete("/:id",[authJwt.verifyToken], products.delete);
  
    // Delete all Products
    router.delete("/",[authJwt.verifyToken], products.deleteAll);
  
    app.use("/api/products",[authJwt.verifyToken], router);
  };
  