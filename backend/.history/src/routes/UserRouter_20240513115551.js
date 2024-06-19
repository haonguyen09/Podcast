const express = require("express");
const router = express.Router();
import UserController from '../controller/UserController'

const UserRouter = () => {
    router.get('get-all', UserController.getAllUser)
}

module.exports = UserRouter