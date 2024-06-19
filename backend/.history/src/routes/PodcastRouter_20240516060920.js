const express = require("express");
const router = express.Router();
const multer = require('multer')
const uuidv4 =  require('uuid');
const PodcastController = require('../controller/PodcastController')

console.log("file", req.files)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + uuidv4())
    }
})

const upload = multer({ storage: storage })

router.post('/create', PodcastController.createPodcast)
router.put('/update/:id', PodcastController.updatePodcast)
router.get('/get-details/:id', PodcastController.getDetailsPodcast)
router.delete('/delete/:id', PodcastController.deletePodcast)
router.get('/get-all', PodcastController.getAllPodcast)

module.exports = router