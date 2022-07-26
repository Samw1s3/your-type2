const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Meetups'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'Create Meetup'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `update Meetup ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete Meetup ${req.params.id}`})
})


module.exports = router