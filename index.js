const express = require('express');

require('./services/passport')

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
const message = `app listening to ${PORT}`;

app.listen(PORT, console.log(message));
