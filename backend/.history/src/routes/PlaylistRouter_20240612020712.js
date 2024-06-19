const express = require("express");
const router = express.Router();
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const PlaylistController = require('../controller/PlaylistController')

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
    cb(null,  uuidv4() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

const cpUpload = upload.fields([
    { name: 'image', maxCount: 1 }
])

router.post('/create', PlaylistController.createRate)
router.put('/update/:id', PlaylistController.updateRate)
router.get('/get-details/:id', PlaylistController.getDetailsRate)
router.delete('/delete/:id', PlaylistController.deleteRate)
router.get('/get-all', PlaylistController.getAllRate)

module.exports = router