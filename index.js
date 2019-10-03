/* Define Defendences */
require('dotenv').config();

var express = require('express');
var pug = require('pug');
var mongoose = require('mongoose');
var morgan = require('morgan')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

/* Content */
var app = express();

var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true});

// Middlewares
var authMiddleware = require('./middlewares/auth.middleware');
/* Set up morgan */
app.use(morgan('dev'));
/* Set up static file */
app.use(express.static('public'));
/* Set up bodyparser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
/* Set up view pug */
app.set('view engine', 'pug');
app.set('views', './views');

// Routes
var studentRoute = require('./routes/student.route');
var teacherRoute = require('./routes/teacher.route');
var auth = require('./routes/admin.route');

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Anh Kiet',
    cookie: req.cookies
  });
});

app.use('/student' ,authMiddleware.requireAuth,studentRoute);
app.use('/teacher',authMiddleware.requireAuth, teacherRoute);
app.use('/admin', auth);




// Server listening on port ???
app.listen(port, () => console.log(`Example app listening on port ${port}!`));