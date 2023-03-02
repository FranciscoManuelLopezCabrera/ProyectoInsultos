const {createUser, deleteUser, modifyUser} = require('../controller/user');

const { Router } = require('express');

const router = Router();

router.post('', createUser);

router.delete('', deleteUser);

// router.('', modifyUser);

module.exports = router;