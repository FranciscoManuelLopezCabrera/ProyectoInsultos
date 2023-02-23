const userService = require('../services/mongodbServices/user');
const Users = require("../models/user");

// CREAR USUARIOS
async function createUser(req, res, next) {
  try {
    const createdUser = await userService.createUser(req.body);
    res.status(201).send(createdUser);
  } catch (error) {
    next(error);
  }
}

module.exports={createUser};