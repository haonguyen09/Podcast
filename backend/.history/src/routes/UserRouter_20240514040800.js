const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController')

router.post('/create', UserController.createUser)
router.put('/update/:id', UserController.updateUser)
// router.get('/get-all', UserController.getAllUser)
router.get('/get-all', UserController.getAllUser)

module.exports = router