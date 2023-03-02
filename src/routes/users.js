const {
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/user");

const { Router } = require("express");

const router = Router();

router.post("", createUser);

router.delete("/:email", deleteUser);

router.put("/:email", updateUser);

module.exports = router;
