const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000)

// middlewars
app.use(cors());
app.use(express.json());

// routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/notas', require('./routes/notas'));

module.exports = app;