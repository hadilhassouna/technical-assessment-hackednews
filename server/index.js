var express = require('express');
var bodyParser = require('body-parser');
var storyRouter = require('./routers/story.js');
var mongoose = require('mongoose');
// const config = require('../../seed.js');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hackednews');

// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));



app.use('/api/story', storyRouter);


app.listen(8000, function() {
  console.log('listening on port 8000');
});
