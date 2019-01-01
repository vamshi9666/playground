const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.get_all);
router.post('/one', userController.add_user);

router.post('/', userController.add_bulk_users);

module.exports = router