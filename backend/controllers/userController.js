const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')


let secret = "secret123"


const generateToken = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: '30d' })
}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ messgae: error.message })
    }
}


const getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.status(200).json({
            username: user.username,
            email: user.email,
            password: user.password,
            message: "User Found!"
        })
    } else {
        res.status(400)
        throw new Error('User not found')
    }
}


//allow user to update password. 
const editPassword = asyncHandler(async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(6);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Password has been updated")

        } catch (err) {
            return res.status(500).json(err)
        }
    }
})


const deleteUser = asyncHandler(async (req, res) => {
    const { username } = req.body
    const user = await User.findOneAndDelete({ username })
    if (user) {
        res.status(200).json({ message: "deletion completed" })
    } else {
        res.status(400)
        throw new Error('Invalid deletion')
    }
}
)


const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        //if user is not found by email, return status code 404 and user not found message
        if (!user) {
            res.status(404).json("user not found");
        }

        //if user exist and password is correct
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                message: "logged in ",
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid credentials')
        }

    } catch (error) {
        res.status(500).json(error);
    }



})





const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body
    //is one of the username email password is not provided, return 400
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('please add all three fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // create user based on input data
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName
    })

    if (user) {
        //user created!
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })

    } else {
        res.status(400)
        throw new Error('Invalid User')
    }
})




const followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("follow operation succeed")
            } else {
                res.status(400).json("User already followed")
            }
        } catch (error) {
            res.status(500).json(err)
        }


    } else {
        res.status(403).json("invalid operation: following yourself")

    }
}


const unfollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("unfollow operation succeed")
            } else {
                res.status(400).json("User can not be unfollowed")
            }
        } catch (error) {
            res.status(500).json(err)
        }


    } else {
        res.status(403).json("invalid operation: unfollowing yourself")

    }
}



module.exports = {
    getAllUsers, getUser, editPassword, deleteUser, loginUser, registerUser, followUser, unfollowUser
}