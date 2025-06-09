const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


router.get('/', eventController.getEvents);


router.get('/new', eventController.showCreateForm);


router.post('/', eventController.createEvent);


router.post('/update/:id', eventController.updateEvent);


router.get('/edit/:id', eventController.showEditForm);


router.get('/delete/:id', eventController.deleteEvent);


router.get('/filter', eventController.filterEvents);

// Katıldığım etkinlikler
router.get('/my-events', eventController.myEvents);


router.post('/:id/comments', eventController.addComment);


router.get('/:id', eventController.eventDetail);


router.post('/:id/dolacz', eventController.joinEvent);

// 🆕 Önerilen etkinliği kendi listene ekle (kopyala)
router.post('/copy', eventController.copyEvent);

module.exports = router;

