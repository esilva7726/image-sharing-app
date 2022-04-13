const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/image_sharing_app', {
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
