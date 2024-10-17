// Create web server
// HTTP methods: GET, POST, PUT, DELETE
// GET: read data
// POST: create data
// PUT: update data
// DELETE: delete data

// Require modules
const express = require('express');
const router = express.Router();
const { Comment } = require('../models/Comment');

// Get all comments
router.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(comments);
  });
});

// Get comment by id
router.get('/comments/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(comment);
  });
});

// Create comment
router.post('/comments', (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(comment);
  });
});

// Update comment
router.put('/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, comment) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(comment);
  });
});

// Delete comment
router.delete('/comments/:id', (req, res) => {
  Comment.findByIdAndDelete(req.params.id, (err, comment) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(comment);
  });
});

module.exports = router;
