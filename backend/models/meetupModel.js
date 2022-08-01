const mongoose = require('mongoose')


const meetupSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  } , 
  name: {
        type: String,
        required: [true, 'Please add a name']
    },
      hair: {
        type: String,
      },
      height: {
        type: String,
      },
      physicalAttributes: {
        type: String,
      },
      conversation: {
        type: String,
      },
      laughs: {
        type: String,
      },
      butterflies: {
        type: String,
      },
      eyeContact: {
        type: String,
      },
      smile: {
        type: String
      },
      generalVibe: {
        type: String,
      }
}, {
    timestamps: true
});

module.exports = mongoose.model('Meetup', meetupSchema )