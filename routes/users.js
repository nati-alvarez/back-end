const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const {restricted} = require("../middleware/auth");

router.get("/", restricted, usersController.getUsers);

module.exports = router;