const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  mysql = require('mysql'),
  myConnection = require('express-myconnection');

const app = express()

//importing routes
const customerRoutes = require('./routes/customer')

// settings
app.set('port', process.env.PORT || 3333);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// /middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'artemis'
}, 'single'));

// routes
app.use('/', customerRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))

// server start
app.listen(app.get('port'), () => { console.log(`Server on port: ${app.get('port')}`) });