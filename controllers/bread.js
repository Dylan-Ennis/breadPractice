const router = require('express').Router()
const Bread = require('../models/bread')

// GET retreive all the bread
router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

// GET retreive bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router