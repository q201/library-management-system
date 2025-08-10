const express = require('express');
const { createReport, getAllReports, getReportById } = require('../controllers/reports');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createReport);
router.get('/', getAllReports);
router.get('/:id', getReportById);

module.exports = router;


