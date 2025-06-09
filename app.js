require('dotenv').config(); // ⬅ ENV DEĞERLERİ KULLANILACAK

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// 🌱 MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('DB Error:', err));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "blob:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }
}));

// 🎯 Session - güvenli hale getirildi
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}


app.use('/', authRoutes);
app.use('/events', isAuthenticated, eventRoutes);


app.get('/', (req, res) => {
  if (!req.session.userId) {
    res.render('home');
  } else {
    res.redirect('/events');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
