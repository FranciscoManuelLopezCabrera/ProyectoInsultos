const {createUser} = require('../controller/user');

const { Router } = require('express');

const router = Router();

router.post('', createUser);

module.exports = router;