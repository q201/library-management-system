const express = require('express');
const { createNotification, getAllNotifications, updateNotification } = require('../controllers/notifications');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createNotification);
router.get('/', getAllNotifications);
router.put('/:id', updateNotification);

module.exports = router;

