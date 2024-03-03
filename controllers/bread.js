const router = require('express').Router();
const Bread = require('../models/bread')

// get all bread
router.get('/', (req, res) => {
  res.send(Bread);
});

// GET retrieve bread by index
router.get('/:index', (req, res) => {
  const { index } = req.params
})

module.exports = router