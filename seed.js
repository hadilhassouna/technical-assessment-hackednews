var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var models = server.models;

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function() {
   [
    'about',
    'id',
    'score'
  ]
  
};

const seed = () => {
}

seed()
.then(() => {
  process.exitCode();
});

seedDb(data);

//author, title, score
