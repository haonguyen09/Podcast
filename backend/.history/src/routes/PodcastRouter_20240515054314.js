const express = require("express");
const router = express.Router();
const PodcastController = require('../controller/PodcastController')

router.post('/create', PodcastController.createUser)
router.put('/update/:id', PodcastController.updateUser)
router.get('/get-details/:id', PodcastController.getDetailsUser)
router.delete('/delete/:id', PodcastController.deleteUser)
router.get('/get-all', PodcastController.getAllUser)

module.exports = router