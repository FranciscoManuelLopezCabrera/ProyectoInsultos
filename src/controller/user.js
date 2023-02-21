const userServices = require ('../services/mongodbServices/user');

//CREATE USER
function createUser(){
    const createdUser = userServices.createUser();
}

//