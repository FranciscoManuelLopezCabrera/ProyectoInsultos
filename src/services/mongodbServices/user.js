const { User }= require('../../models');

// CREAR USUARIO
async function createUser(body) {
  const createdUser = await new User(body).save();
  return createdUser;
}

// ELIMINAR USUARIO
async function deleteUser(email) {
  const filter = { email };
    const deletedUser = await User.deleteOne(filter);
    return deletedUser;
}

// MODIFICAR USUARIO

module.exports={createUser, deleteUser};