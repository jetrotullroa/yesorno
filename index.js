const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
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

// MIDDLEWARES
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
  })
)
app.use(passport.initialize())
app.use(passport.session())


// ROUTES
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app)

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
const message = `app listening to ${PORT}`;

app.listen(PORT, console.log(message));
