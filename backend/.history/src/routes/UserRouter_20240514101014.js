const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController')

router.post('/create', UserController.createUser)
router.put('/update/:id', UserController.updateUser)
router.get('/get-details/:id', UserController.getDetailsUser)
router.get('/get-all', UserController.getAllUser)
router.delete('/delete/:id', UserController.deleteUser)

module.exports = router