/* Define Defendences */
require('dotenv').config();

var express = require('express');
var pug = require('pug');
var mongoose = require('mongoose');
var morgan = require('morgan')
var bodyParser = require('body-parser');

/* Content */
var app = express();

var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true});

// Middlewares
/* Set up morgan */
app.use(morgan('dev'));
/* Set up static file */
app.use(express.static('public'));
/* Set up bodyparser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* Set up view pug */
app.set('view engine', 'pug');
app.set('views', './views');

// Routes
var studentRoute = require('./routes/student.route');
var teacherRoute = require('./routes/teacher.route');

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Anh Kiet'
  });
});

app.use('/student' , studentRoute);
app.use('/teacher', teacherRoute);
app.use('/login', function(req,res) {
  res.render('authentication/login');
});
app.use('/teacher', teacherRoute);




// Server listening on port ???
app.listen(port, () => console.log(`Example app listening on port ${port}!`));