module.exports = app => {
    const roles = require("../controllers/role.controller.js");
    const { authJwt } = require("../middlewares");
  
    var router = require("express").Router();
  
    // Create a new Role
    router.post("/",[authJwt.verifyToken], roles.create);
  
    // Retrieve all Roles
    router.get("/",[authJwt.verifyToken], roles.findAll);
  
    // Retrieve a single Role with id
    router.get("/:id",[authJwt.verifyToken], roles.findOne);
  
    // Update a Role with id
    router.put("/:id",[authJwt.verifyToken], roles.update);
  
    // Delete a Role with id
    router.delete("/:id",[authJwt.verifyToken], roles.delete);
  
    // Delete all Roles
    router.delete("/",[authJwt.verifyToken], roles.deleteAll);
  
    app.use("/api/roles",[authJwt.verifyToken], router);
  };
  