const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

require('./services/passport')

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
const message = `app listening to ${PORT}`;

app.listen(PORT, console.log(message));
