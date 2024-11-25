const express = require("express");
const router = express.Router();

//insert model
const User = require("../Model/UserModel");

//insert user controller
const UserController = require("../Controllers/UserControllers"),
  app = require("../app");

router.get("/", UserController.getAllUser);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.UpdateUser);
router.delete("/:id", UserController.deleteUser);



//export
module.exports = router;
