const { Router } = require('express');
const router = Router();

const Image = require('../models/image');

router.get('/', (req, res) => {
  res.send('Index page');
});

router.get('/upload', (req, res) => {
  res.render('upload');
});

router.post('/upload', async (req, res) => {
  const { title, description } = req.body;
  const { filename, originalname, mimetype, size } = req.file;

  const image = new Image();
  image.title = title;
  image.description = description;
  image.filename = filename;
  image.path = 'img/uploads/' + filename;
  image.originalname = originalname;
  image.mimetype = mimetype;
  image.size = size;
  
  await image.save();

  res.redirect('/');
});

router.get('/image/:id', (req, res) => {
  res.send('Profile image');
});

router.delete('/image/:id/delete', (req, res) => {
  res.send('Image deleted');
});

module.exports = router;
