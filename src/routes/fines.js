const express = require('express');
const { createFine, getAllFines, updateFine } = require('../controllers/fines');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createFine);
router.get('/', getAllFines);
router.put('/:id', updateFine);

module.exports = router;

