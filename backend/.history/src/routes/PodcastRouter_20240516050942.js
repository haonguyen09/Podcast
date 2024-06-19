const express = require("express");
const router = express.Router();
const multer = require('multer')
import { v4 as uuidv4 } from 'uuid';
const PodcastController = require('../controller/PodcastController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

router.post('/create', PodcastController.createPodcast)
router.put('/update/:id', PodcastController.updatePodcast)
router.get('/get-details/:id', PodcastController.getDetailsPodcast)
router.delete('/delete/:id', PodcastController.deletePodcast)
router.get('/get-all', PodcastController.getAllPodcast)

module.exports = router