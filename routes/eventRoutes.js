const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Etkinlik listesi
router.get('/', eventController.getEvents);

// Yeni etkinlik oluşturma formu
router.get('/new', eventController.showCreateForm);

// Yeni etkinlik gönderimi
router.post('/', eventController.createEvent);

// Etkinlik güncelleme
router.post('/update/:id', eventController.updateEvent);

// Etkinlik düzenleme formu
router.get('/edit/:id', eventController.showEditForm);

// Etkinlik silme
router.get('/delete/:id', eventController.deleteEvent);

// Etkinlikleri filtrele
router.get('/filter', eventController.filterEvents);

// Katıldığım etkinlikler
router.get('/my-events', eventController.myEvents);

// Yorum ekleme
router.post('/:id/comments', eventController.addComment);

// Etkinlik detay sayfası
router.get('/:id', eventController.eventDetail);

// Etkinliğe katılma (dołącz)
router.post('/:id/dolacz', eventController.joinEvent);

// 🆕 Önerilen etkinliği kendi listene ekle (kopyala)
router.post('/copy', eventController.copyEvent);

module.exports = router;

