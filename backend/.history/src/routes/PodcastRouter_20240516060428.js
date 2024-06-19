const express = require("express");
const router = express.Router();
const multer = require('multer')
const { v4 as uuidv4 } require 'uuid';
const PodcastController = require('../controller/PodcastController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + v4())
    }
})

const upload = multer({ storage: storage })

router.post('/create', upload, PodcastController.createPodcast)
router.put('/update/:id', PodcastController.updatePodcast)
router.get('/get-details/:id', PodcastController.getDetailsPodcast)
router.delete('/delete/:id', PodcastController.deletePodcast)
router.get('/get-all', PodcastController.getAllPodcast)

module.exports = router