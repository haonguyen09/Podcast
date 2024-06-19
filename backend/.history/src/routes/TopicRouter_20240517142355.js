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
    cb(null, uuidv4() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

const cpUpload = upload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'image', maxCount: 1 },
  ])

router.post('/create', cpUpload, TopicController.createTopic)
router.put('/update/:id', cpUpload, TopicController.updateTopic)
router.get('/get-details/:id', TopicController.getDetailsTopic)
router.delete('/delete/:id', TopicController.deleteTopic)
router.get('/get-all', TopicController.getAllTopic)

module.exports = router