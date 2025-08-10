const express = require('express');
const { createCatalog, getAllCatalogs, getCatalogById, updateCatalog, deleteCatalog } = require('../controllers/catalogs');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.post('/', createCatalog);
router.get('/', getAllCatalogs);
router.get('/:id', getCatalogById);
router.put('/:id', updateCatalog);
router.delete('/:id', deleteCatalog);

module.exports = router;


