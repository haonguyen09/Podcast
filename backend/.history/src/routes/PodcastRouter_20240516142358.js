const express = require("express");
const router = express.Router();
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const PodcastController = require('../controller/PodcastController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("filesde", req.files)
        console.log("filede", file)
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        console.log("filesname", req.files)
        console.log("filename", file)
    cb(null, file.fieldname + '-' + uuidv4())
    }
})

const upload = multer({ storage: storage })

var cpUpload = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]);

router.post('/create', cpUpload, PodcastController.createPodcast)
router.put('/update/:id', PodcastController.updatePodcast)
router.get('/get-details/:id', PodcastController.getDetailsPodcast)
router.delete('/delete/:id', PodcastController.deletePodcast)
router.get('/get-all', PodcastController.getAllPodcast)

module.exports = router