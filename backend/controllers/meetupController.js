
// get meetups request GET /api/meetups
const getMeetups = (req,res) => {
    res.status(200).json({message: 'Get Meetup'})
}

// Create meetups request post /api/meetups
const createMeetups = (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create Meetup'})
}

// update meetups request put /api/meetups/:id
const updateMeetup = (req,res) => {
    res.status(200).json({message: `update Meetup ${req.params.id}`})
}

// delete meetups request put /api/meetups/:id
const deleteMeetup = (req,res) => {
    res.status(200).json({message: `delete Meetup ${req.params.id}`})
}

module.exports = {
  getMeetups, createMeetups, updateMeetup, deleteMeetup
}