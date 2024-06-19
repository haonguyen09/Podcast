const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController')

router.post('/create', UserController.createUser)
router.post('/login', UserController.loginUser)
router.post('/refresh-token', UserController.refreshToken)
router.post('/logout', UserController.logoutUser)
router.put('/update/:id', UserController.updateUser)
router.get('/get-details/:id', UserController.getDetailsUser)
router.delete('/delete/:id', UserController.deleteUser)
router.get('/get-all', UserController.getAllUser)

module.exports = router