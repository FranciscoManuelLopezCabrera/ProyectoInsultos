const { Router } = require('express');


const router = Router();

router.get('/', getUsers);
router.post('', createUser);
router.get('/:id', getUserId);

module.exports = router;