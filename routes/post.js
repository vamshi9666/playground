const express = require('express')

const router = express.Router();

const postController = require('../controllers/post')

router.post('/',postController.add_post)

module.exports = router;
