const express = require('express');
const router = express.Router();
const { getMeetups,
     updateMeetup, 
     createMeetups, 
     deleteMeetup } = require('../controllers/meetupController');

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getMeetups).post(protect, createMeetups)
router.route('/:id').delete(protect, deleteMeetup).put(protect, updateMeetup)


module.exports = router