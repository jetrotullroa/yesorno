const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// MODEL
require('./models/User')
const mongoURI = 'mongodb://admin:password@ds149844.mlab.com:49844/jetspree_test'
mongoose.connect(keys.mongoURI);

// SERVICES
require('./services/passport')

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
const message = `app listening to ${PORT}`;

app.listen(PORT, console.log(message));
