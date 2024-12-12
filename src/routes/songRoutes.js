const express = require('express');
const songController = require('../controllers/songController');
const router = express.Router();

router.post('/', songController.createSong);
router.get('/:id', songController.getSong);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);
router.get('/album/:albumId/songs', songController.getSongsByAlbum);

module.exports = router;
