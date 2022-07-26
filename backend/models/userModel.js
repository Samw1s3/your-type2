const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)