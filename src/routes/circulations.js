const express = require('express');
const { createCirculation, getAllCirculations, getCirculationById, updateCirculation } = require('../controllers/circulations');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createCirculation);
router.get('/', getAllCirculations);
router.get('/:id', getCirculationById);
router.put('/:id', updateCirculation);

module.exports = router;

