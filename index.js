const express = require('express');
const path = require('path');
const http = require('http');
// const { Server } = require('socket.io');
const loginrouter = require('./routes/login');
const homeroutes = require('./routes/home');
const projectroutes = require('./routes/poject');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
 
// const { connection } = require('mongoose');
dotenv = require('dotenv').config();
// const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);
// const io = new Server(server);



// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const expressSession = require('express-session');
// const passport = require('passport');

 // Ensure this handles the connection

// Middleware setup
// app.use(morgan('dev'));
// app.use(expressSession({
//   resave: false,
//   saveUninitialized: false,
//   secret: "hello hello"
// }));

// Passport setup
// app.use(passport.initialize());
// app.use(passport.session());
// Configure passport strategies if needed
// passport.serializeUser(...);
// passport.deserializeUser(...);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure correct path
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Socket.io functionality
// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   socket.on('send-location', (data) => {
//     io.emit('receive-location', { id: socket.id, ...data });
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//     io.emit('user-disconnected', socket.id);
//   });
// });

// Routes setup
app.use(loginrouter);
app.use(homeroutes);
app.use(projectroutes);

app.use((_, res) => {
  res.status(404).render('404page', { pagetittle: 'Page Not Found' }); // Ensure status code 404 is set
});




  const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

  });
// const port = process.env.PORT || 3002;

