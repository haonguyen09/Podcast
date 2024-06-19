const express = require("express");
const router = express.Router();
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const UserController = require('../controller/UserController')

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

router.post('/create', UserController.createUser)
router.post('/login', UserController.loginUser)
router.post('/refresh-token', UserController.refreshToken)
router.post('/logout', UserController.logoutUser)
router.put('/update/:id', UserController.updateUser)
router.get('/get-details/:id', UserController.getDetailsUser)
router.delete('/delete/:id', UserController.deleteUser)
router.get('/get-all', UserController.getAllUser)

module.exports = router