const express= require('express')
const User= require('../models/User')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler = require('express-async-handler')


let secret="secret123"
const generateToken=(id)=>{
    return jwt.sign({id},secret,{expiresIn:'30d'})
}


const getAllUsers = async (req, res)=>{
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({messgae:error.message})
    }
}


const getUser= async (req, res)=>{
    let id=req.body.id
    try {
        const user=await User.findById(id)
        if(user==null){
            res.status(404).json({message:"User does not exist"})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// const createUser = async (req, res)=>{


//     try {
//         const user= new User({
//             username: req.body.username,
//             password: req.body.password,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName
//         })
//         await user.save()
//         res.status(200).json({message:"user created"})
//     } catch (error) {
//         res.status(400).json({messgae:error.message})
//     }
// }



const editUser = (req, res)=>{
    res.status(200).json({message:`update user ${req.params.id}`})
}


const deleteUser = (req, res)=>{
    res.status(200).json({message:`delete user ${req.params.id}`})
}


const loginUser = asyncHandler(async (req, res)=>{
    const {email,password}= req.body
    const user=await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({message:"logged in ",
        token:generateToken(user._id)
    })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


const getMe= asyncHandler(async (req,res)=>{
    res.json({message:"user data disopkayed"})

})



const registerUser=asyncHandler( async (req,res)=>{
    const {username, email,password,firstName,lastName} = req.body

    if (!username||!email||!password||!firstName||!lastName){
        res.status(400)
        throw new Error('please add all three fields')
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }


    const salt= await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password, salt)
    const user= await User.create({
        username,
        email,
        password:hashedPassword,
        firstName,
        lastName
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id)
        })

    }else{
        res.status(400)
        throw new Error('Invalid User')
    }
})



module.exports={
    getAllUsers,getUser,editUser,deleteUser,loginUser,getMe,registerUser
}