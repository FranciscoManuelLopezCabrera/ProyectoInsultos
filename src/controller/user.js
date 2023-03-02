const userService = require("../services/mongodbServices/user");
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

// BORRAR USUARIO
async function deleteUser(req, res) {
  const { email } = req.params;
  const deletedUser = await userService.deleteUser(email);
  res.status(201).send(deletedUser);
}

// MODIFICAR USUARIO
async function updateUser(req, res, next) {
  try {
    const { email } = req.params;
    const updatedUser = await userService.updateUser(email, req.body);
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
}

// EXPORTS
module.exports = { createUser, deleteUser, updateUser };