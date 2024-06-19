const express = require("express");
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const PodcastController = require('../controller/PodcastController')

router.post('/create', PodcastController.createPodcast)
router.put('/update/:id', PodcastController.updatePodcast)
router.get('/get-details/:id', PodcastController.getDetailsPodcast)
router.delete('/delete/:id', PodcastController.deletePodcast)
router.get('/get-all', PodcastController.getAllPodcast)

module.exports = router