const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/users');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


