const express = require("express");
const router = express.Router();
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const TopicController = require('../controller/TopicController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadsDir = path.join(__dirname, '../uploads/');
        // Check if the directory exists, if not create it
        if (!fs.existsSync(uploadsDir)){
            fs.mkdirSync(uploadsDir, { recursive: true });
        }
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        console.log("filesname", req.files)
        console.log("filename", file)
    cb(null, file.fieldname + '-' + uuidv4())
    }
})

const upload = multer({ storage: storage })

const cpUpload = upload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'image', maxCount: 1 },
  ])

router.post('/create', cpUpload, TopicController.createPodcast)
router.put('/update/:id', cpUpload, TopicController.updatePodcast)
router.get('/get-details/:id', TopicController.getDetailsPodcast)
router.delete('/delete/:id', TopicController.deletePodcast)
router.get('/get-all', TopicController.getAllPodcast)

module.exports = router