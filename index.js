require('dotenv').config();

var express = require('express');
var pug = require('pug');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var studentRoute = require('./routes/student.route');

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true});

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Anh Kiet'
  });
});

app.use('/student' , studentRoute);







app.listen(port, () => console.log(`Example app listening on port ${port}!`));