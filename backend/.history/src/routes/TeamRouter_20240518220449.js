const express = require("express");
const router = express.Router();
const TeamController = require('../controller/TeamController')

router.post('/create', TeamController.createUser)
router.put('/update/:id', TeamController.updateUser)
router.get('/get-details/:id', TeamController.getDetailsUser)
router.delete('/delete/:id', TeamController.deleteUser)
router.get('/get-all', TeamController.getAllUser)

module.exports = router