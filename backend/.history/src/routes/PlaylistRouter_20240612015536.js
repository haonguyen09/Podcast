const express = require("express");
const router = express.Router();
const PlaylistController = require('../controller/PlaylistController')

router.post('/create', PlaylistController.createRate)
router.put('/update/:id', PlaylistController.updateRate)
router.get('/get-details/:id', PlaylistController.getDetailsRate)
router.delete('/delete/:id', PlaylistController.deleteRate)
router.get('/get-all', PlaylistController.getAllRate)

module.exports = router