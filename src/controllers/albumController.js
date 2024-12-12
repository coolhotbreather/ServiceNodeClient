const { AlbumEntity } = require('../entities');

module.exports = {
  createAlbum(req, res) {
    const { title, artist, release_date, genre } = req.body;
    albumModel.createAlbum({ title, artist, release_date, genre })
      .then(album => res.status(201).json(album))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  getAlbum(req, res) {
    const { id } = req.params;
    albumModel.getAlbumById(Number(id))
      .then(album => {
        if (!album) return res.status(404).json({ error: 'Album not found' });
        res.json(album);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  },

  updateAlbum(req, res) {
    const { id } = req.params;
    const { title, artist, release_date, genre } = req.body;
    albumModel.updateAlbum(Number(id), { title, artist, release_date, genre })
      .then(album => res.json(album))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  deleteAlbum(req, res) {
    const { id } = req.params;
    albumModel.deleteAlbum(Number(id))
      .then(() => res.status(204).end())
      .catch(err => res.status(500).json({ error: err.message }));
  },

  getTopAlbums(req, res) {
    const { n } = req.query;
    albumModel.getTopAlbumsBySongsCount(Number(n))
      .then(albums => res.json(albums))
      .catch(err => res.status(500).json({ error: err.message }));
  },
};
