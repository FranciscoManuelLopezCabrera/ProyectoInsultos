const { User } = require("../../models");

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
async function updateUser(email, newData) {
  const filter = { email };
  const updatedUser = await User.findOneAndUpdate(filter, newData, {
    new: true,
  });
  return updatedUser;
}

// EXPORTS
module.exports = { createUser, deleteUser, updateUser };
