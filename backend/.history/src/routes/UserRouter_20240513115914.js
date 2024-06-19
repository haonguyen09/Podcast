const express = require("express");
const router = express.Router();
import UserController from '../controller/UserController'

router.get('/get-all', UserController.getAllUser)

module.exports = router