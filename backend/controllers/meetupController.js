const asyncHandler = require('express-async-handler')

const Meetup = require('../models/meetupModel')
// get meetups request GET /api/meetups
const getMeetups = asyncHandler(async (req,res) => {
    const meetups = await Meetup.find()
    res.status(200).json(meetups)
})

// Create meetups request post /api/meetups
const createMeetups = asyncHandler(async (req,res) => {
    if(!req.body) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const meetup = await Meetup.create({
            name: req.body.name,
            hairColor: req.body.hairColor,
            height: req.body.height,
            physicalAttributes: req.body.physicalAttributes,
            conversation: req.body.conversation,
            laughs: req.body.laughs, 
            butterflies: req.body.butterflies,
            eyeContact: req.body.eyeContact,
            smile: req.body.smile,
            generalVibe: req.body.generalVibe       
    })

    res.status(200).json(meetup)
})

// update meetups request put /api/meetups/:id
const updateMeetup = asyncHandler(async (req,res) => {
    const meetup = await Meetup.findById(req.params.id)

    if(!meetup) {
        res.status(400)
        throw new Error('Meetup not found')
    }

    const updatedMeetup = await Meetup.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedMeetup)
})

// delete meetups request put /api/meetups/:id
const deleteMeetup = asyncHandler(async (req,res) => {
    const meetup = await Meetup.findById(req.params.id)

    if(!meetup) {
        res.status(400)
        throw new Error('Meetup not found')
    }

    await meetup.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
  getMeetups, 
  createMeetups, 
  updateMeetup, 
  deleteMeetup
}