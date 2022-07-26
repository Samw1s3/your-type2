const express = require('express');
const router = express.Router();
const { getMeetups,
     updateMeetup, 
     createMeetups, 
     deleteMeetup } = require('../controllers/meetupController');

router.route('/').get(getMeetups).post(createMeetups)
router.route('/:id').delete(deleteMeetup).put(updateMeetup)



router.put('/:id', updateMeetup)

router.delete('/:id', deleteMeetup)


module.exports = router