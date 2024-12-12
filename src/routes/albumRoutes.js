const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

router.post('/', albumController.createAlbum);
router.get('/:id', albumController.getAlbum);
router.put('/:id', albumController.updateAlbum);
router.delete('/:id', albumController.deleteAlbum);
router.get('/top', albumController.getTopAlbums);

module.exports = router;
