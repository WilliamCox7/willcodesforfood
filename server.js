/* PACKAGES */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config');
const app = module.exports = express();

/* APP */
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
