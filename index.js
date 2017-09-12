const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

// MODEL
require('./models/User')

mongoose.connect(keys.mongoURI);

// SERVICES
require('./services/passport')

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
const message = `app listening to ${PORT}`;

app.listen(PORT, console.log(message));
