const User = require('../models/user');
const bcrypt = require('bcrypt');

// GET /login
exports.showLoginForm = (req, res) => {
  res.render('login', { error: null });
};

// POST /login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // 1. Zorunlu alan kontrolü
  if (!username || !password) {
    return res.render('login', { error: 'Wszystkie pola są wymagane.' });
  }

  // 2. Uzunluk kontrolü
  if (username.length < 3 || password.length < 6) {
    return res.render('login', { error: 'Nieprawidłowa długość danych logowania.' });
  }

  // 3. Kullanıcıyı ara ve şifreyi kontrol et
  const user = await User.findOne({ username });
  const isMatch = user && await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.render('login', { error: 'Nieprawidłowa nazwa użytkownika lub hasło.' });
  }

  // 4. Giriş başarılı
  req.session.userId = user._id;
  res.redirect('/events');
};

// GET /register
exports.showRegisterForm = (req, res) => {
  res.render('register', { error: null });
};

// POST /register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // 1. Zorunlu alan kontrolü
  if (!username || !password) {
    return res.render('register', { error: 'Wszystkie pola są wymagane.' });
  }

  // 2. Uzunluk kontrolü
  if (username.length < 3 || password.length < 6) {
    return res.render('register', { error: 'Nazwa użytkownika i hasło muszą mieć odpowiednią długość.' });
  }

  // 3. Mevcut kullanıcı kontrolü
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.render('register', { error: 'Użytkownik o tej nazwie już istnieje.' });
  }

  // 4. Şifreyi hashle ve kullanıcıyı oluştur
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

