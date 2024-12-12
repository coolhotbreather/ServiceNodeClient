const songModel = require('../models/songModel');
const { Song } = require('../types/index');

module.exports = {
  createSong(req, res) {
    const { title, artist, album_id, duration, release_date } = req.body;
    songModel.createSong({ title, artist, album_id, duration, release_date })
      .then(song => res.status(201).json(song))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  getSong(req, res) {
    const { id } = req.params;
    songModel.getSongById(Number(id))
      .then(song => {
        if (!song) return res.status(404).json({ error: 'Song not found' });
        res.json(song);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  },

  updateSong(req, res) {
    const { id } = req.params;
    const { title, artist, album_id, duration, release_date } = req.body;
    songModel.updateSong(Number(id), { title, artist, album_id, duration, release_date })
      .then(song => res.json(song))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  deleteSong(req, res) {
    const { id } = req.params;
    songModel.deleteSong(Number(id))
      .then(() => res.status(204).end())
      .catch(err => res.status(500).json({ error: err.message }));
  },

  getSongsByAlbum(req, res) {
    const { albumId } = req.params;
    const { page = 1, size = 10 } = req.query;
    songModel.getAllSongs({ album_id: albumId }, Number(page), Number(size))
      .then(songs => res.json(songs))
      .catch(err => res.status(500).json({ error: err.message }));
  },
};
