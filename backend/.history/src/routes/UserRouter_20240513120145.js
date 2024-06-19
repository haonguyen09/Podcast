const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController')

router.get('/get-all', UserController.getAllUser)

module.exports = router