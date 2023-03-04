const userService = require("../services/mongodbServices/slur");
const Users = require("../models/slur");

// CREAR USUARIOS
async function createSlurSus(req, res, next) {
  try {
    const createdSlurSus = await userService.createSlurSus(req.body);
    res.status(201).send(createdSlurSus);
  } catch (error) {
    next(error);
  }
}