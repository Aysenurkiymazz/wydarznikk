const User = require('../models/user');
const bcrypt = require('bcrypt');

// GET /login
exports.showLoginForm = (req, res) => {
  res.render('login', { error: null });
};

// POST /login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.render('login', { error: 'Wszystkie pola są wymagane.' });
  }

  
  if (username.length < 3 || password.length < 6) {
    return res.render('login', { error: 'Nieprawidłowa długość danych logowania.' });
  }

  
  const user = await User.findOne({ username });
  const isMatch = user && await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.render('login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło.' });
  }

  
  req.session.userId = user._id;
  res.redirect('/events');
};


exports.showRegisterForm = (req, res) => {
  res.render('register', { error: null });
};

// POST /register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
    return res.render('register', { error: 'Wszystkie pola są wymagane.' });
  }

  
  if (username.length < 3 || password.length < 6) {
    return res.render('register', { error: 'Nazwa użytkownika i hasło muszą mieć odpowiednią długość.' });
  }

  
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.render('register', { error: 'Użytkownik o tej nazwie już istnieje.' });
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();

  res.redirect('/login');
};

// POST /logout
exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/events');
    }
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
};

