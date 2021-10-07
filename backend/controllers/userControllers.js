const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

//----><---- register new USER
const registerUser = asyncHandler(async (req, res) => {
    // const registerUser = async (req, res) => {  // >> without asyncHandler

    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error("User Allredy Exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            pic: user.pic,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id) //jwt token
            // password: user.password,
        });
    } else {
        res.status(400)
        throw new Error('!Error Occured ! User not Found !')
    }
    // res.json({
    //     name,
    //     email,
    // });
});


//----><---- authorizing-User
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id) //jwt token
        });
    } else {
        res.status(401)
        throw new Error("!! Invalid Email or PasswordKey !!")
    }
});

module.exports = { registerUser, authUser }