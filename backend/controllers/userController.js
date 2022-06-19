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
    const {email} = req.body
    const user= await User.findOne({email})
    if(user){
        res.status(200).json({
            username:user.username,
            email:user.email,
            password:user.password,
            message: "User Found!"})
    }else{
        res.status(400)
        throw new Error('User not found')
    }
}



const editUser = asyncHandler(async (req, res)=>{
    const {username,email} = req.body
    const user= await User.findOneAndUpdate({username,email})
    if(user){
        res.status(200).json({
            username:user.username,
            email:user.email,
            password:user.password,
            message: "User updated"})
    }else{
        res.status(400)
        throw new Error('User not found')
    }
})


const deleteUser = asyncHandler(async (req, res)=>{
    const {username} = req.body
    const user= await User.findOneAndDelete({username})
    if(user){
        res.status(200).json({message: "deletion completed"})
    }else{
        res.status(400)
        throw new Error('Invalid deletion')
    }}
)


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
    res.json({message:"user data displayed"})
})



const registerUser=asyncHandler( async (req,res)=>{
    const {username, email,password,firstName,lastName} = req.body

    if (!username||!email||!password){
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