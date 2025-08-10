const express = require('express');
const { createSystemConfiguration, getAllSystemConfigurations, updateSystemConfiguration } = require('../controllers/systemConfigurations');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createSystemConfiguration);
router.get('/', getAllSystemConfigurations);
router.put('/:key', updateSystemConfiguration);

module.exports = router;

