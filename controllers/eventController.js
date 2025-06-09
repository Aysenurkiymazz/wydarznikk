const Event = require('../models/event');
const Guest = require('../models/guest');
const Comment = require('../models/comment');
const User = require('../models/user');

// Yardımcı: Lokasyona göre grupla
const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});

// 1. Kullanıcının oluşturduğu etkinlikleri listele
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.session.userId });
    const user = await User.findById(req.session.userId);

    const suggestedEvents = [
      { name: 'Concert', date: '2026-04-27', location: 'Warszawa', imageUrl: '/images/konser.jpg' },
      { name: 'Art Exhibition', date: '2026-01-04', location: 'Warszawa', imageUrl: '/images/galeria.jpg' },
      { name: 'Food Festival', date: '2025-01-18', location: 'Warszawa', imageUrl: '/images/jedzenie.jpg' },
      { name: 'Tech Meetup', date: '2026-12-10', location: 'Warszawa', imageUrl: '/images/tech.jpg' },
      { name: 'Kino pod chmurką', date: '2025-09-15', location: 'Warszawa', imageUrl: '/images/kino.jpg' },
      { name: 'Yoga w Parku', date: '2025-08-22', location: 'Warszawa', imageUrl: '/images/yoga.jpg' },
      { name: 'DIY', date: '2025-06-22', location: 'Warszawa', imageUrl: '/images/diy.jpg' },
      { name: 'Smok Wawelski Show', date: '2026-07-10', location: 'Kraków', imageUrl: '/images/wawel.jpg' },
      { name: 'Old Town Jazz Night', date: '2026-07-18', location: 'Kraków', imageUrl: '/images/jazz.jpg' },
      { name: 'Kraków Art Fair', date: '2026-07-25', location: 'Kraków', imageUrl: '/images/artfair.jpg' },
      { name: 'Wrocław Coding Camp', date: '2026-01-22', location: 'Wrocław', imageUrl: '/images/code.jpg' },
      { name: 'Bridge Picnic', date: '2026-08-12', location: 'Wrocław', imageUrl: '/images/picnic.jpg' },
      { name: 'Dwarf Festival', date: '2026-08-19', location: 'Wrocław', imageUrl: '/images/dwarf.jpg' },
      { name: 'Kraków Folk Festival', date: '2026-08-15', location: 'Kraków', imageUrl: '/images/folk.jpg' },
      { name: 'River Parade', date: '2026-09-10', location: 'Kraków', imageUrl: '/images/parade.jpg' },
      { name: 'Science Days', date: '2026-02-28', location: 'Kraków', imageUrl: '/images/science.jpg' },
      { name: 'Wrocław Lantern Night', date: '2026-12-01', location: 'Wrocław', imageUrl: '/images/lantern.jpg' },
      { name: 'Historical Reenactment Show', date: '2026-11-20', location: 'Wrocław', imageUrl: '/images/history.jpg' },
      { name: 'Photography Walks', date: '2026-07-30', location: 'Wrocław', imageUrl: '/images/photo.jpg' },
    ];Event.startSession

    const groupedSuggestions = groupBy(suggestedEvents, 'location');

    res.render('events', {
      events,
      userName: user?.username || null,
      groupedSuggestions
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { name, date, guestList, imageUrl, location } = req.body;
    const event = new Event({
      name,
      date,
      guestList: guestList.split(','),
      userId: req.session.userId,
      imageUrl,
      location
    });
    await event.save();
    res.redirect('/events');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.showCreateForm = (req, res) => {
  res.render('newEvent');
};

exports.showEditForm = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.id, userId: req.session.userId });
    if (event) {
      res.render('editEvent', { event });
    } else {
      res.status(404).send('Event nie znaleziony');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, guestList, imageUrl, location } = req.body;
    await Event.findOneAndUpdate(
      { _id: id, userId: req.session.userId },
      { name, date, guestList: guestList.split(','), imageUrl, location }
    );
    res.redirect('/events');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndDelete({ _id: req.params.id, userId: req.session.userId });
    res.redirect('/events');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eventDetail = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    const guests = await Guest.find({ eventId: event._id }).populate('userId');
    const comments = await Comment.find({ eventId: event._id }).sort({ createdAt: -1 }).populate('userId');

    res.render('eventDetails', {
      event: { ...event.toObject(), comments },
      guests: guests.map(g => ({ userName: g.userId.username }))
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.joinEvent = async (req, res) => {
  try {
    const alreadyJoined = await Guest.findOne({
      eventId: req.params.id,
      userId: req.session.userId
    });

    if (!alreadyJoined) {
      await Guest.create({
        eventId: req.params.id,
        userId: req.session.userId,
      });
    }

    res.redirect('/events/' + req.params.id);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.filterEvents = async (req, res) => {
  const { location, afterDate, weekendOnly } = req.query;

  let filter = {};
  if (location) filter.location = location;
  if (afterDate) filter.date = { $gte: new Date(afterDate) };

  if (weekendOnly === 'true') {
    const allEvents = await Event.find(filter);
    const weekendEvents = allEvents.filter(event => {
      const day = new Date(event.date).getDay();
      return day === 0 || day === 6;
    });
    return res.render('filterEvents', { events: weekendEvents });
  }

  const events = await Event.find(filter);
  res.render('filterEvents', { events });
};

exports.myEvents = async (req, res) => {
  try {
    const guestEntries = await Guest.find({ userId: req.session.userId }).populate('eventId');
    const events = guestEntries
      .filter(entry => entry.eventId !== null)
      .map(entry => entry.eventId);

    res.render('myEvents', { events });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { id: eventId } = req.params;

    if (!content || content.trim() === '') {
      return res.redirect('/events/' + eventId);
    }

    await Comment.create({
      eventId,
      userId: req.session.userId,
      content
    });

    res.redirect('/events/' + eventId);
  } catch (err) {
    res.status(500).send('Błąd podczas dodawania komentarza');
  }
};

exports.copyEvent = async (req, res) => {
  try {
    const { name, date, location, imageUrl } = req.body;

    const newEvent = new Event({
      name,
      date,
      location,
      imageUrl,
      userId: req.session.userId,
      guestList: []
    });

    await newEvent.save();
    res.redirect('/events');
  } catch (err) {
    res.status(500).send('Błąd podczas kopiowania wydarzenia');
  }
};
