// Create web server

var express = require('express');
var router = express.Router();
var comments = require('../controllers/comments');

// Create comment
router.post('/', comments.create);

// Update comment
router.put('/:id', comments.update);

// Delete comment
router.delete('/:id', comments.delete);

// Get comment by Id
router.get('/:id', comments.getById);

// Get all comments
router.get('/', comments.getAll);

module.exports = router;
