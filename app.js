const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const cancionRouter = require('./routes/canciones')
const albumRouter = require('./routes/albums')
const {dbConnection} = require('./db/db')


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api', cancionRouter);
app.use('/album', albumRouter);
dbConnection()

module.exports = app;
