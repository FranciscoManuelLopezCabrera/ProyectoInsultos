const {
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/user");

const { Router } = require("express");

const router = Router();

router.post("", createUser);

router.put("/:email", updateUser);

router.delete("/:email", deleteUser);

module.exports = router;