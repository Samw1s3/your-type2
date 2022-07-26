const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// register login user post /api/user/login
const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body
    //check for user email
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
        _id:user.id, 
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Incorrect email or password')
    }


    res.json({message: 'Login User'})
})
// register new user post /api/user
const registerUser = asyncHandler(async (req,res) => {
    const { username, email, password} = req.body

    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash out password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create the user
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id:user.id, 
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// get user data  get /api/user/login
const getMe = asyncHandler(async (req,res) => {
    const { _id, username , email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username, 
        email
    })
})


//create JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser, loginUser, getMe
}