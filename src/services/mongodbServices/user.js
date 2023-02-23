const { User }= require('../../models');

// CREAR USUARIO
async function createUser(body) {
  const createdUser = await new User(body).save();
  return createdUser;
}

module.exports={createUser};