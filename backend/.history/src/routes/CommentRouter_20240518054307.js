const express = require("express");
const router = express.Router();
const CommentController = require('../controller/CommentController')

router.post('/create', CommentController.createUser)
router.put('/update/:id', CommentController.updateUser)
router.get('/get-details/:id', CommentController.getDetailsUser)
router.delete('/delete/:id', CommentController.deleteUser)
router.get('/get-all', CommentController.getAllUser)

module.exports = router