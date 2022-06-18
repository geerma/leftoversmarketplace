const express= require('express')
const User= require('../models/User')

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

const createUser = async (req, res)=>{
    const user= new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    try {
        const newUser=await user.save()
        res.status(200).json({message:"user saved"})
    } catch (error) {
        res.status(400).json({messgae:error.message})
    }
}



const editUser = (req, res)=>{
    res.status(200).json({message:`update user ${req.params.id}`})
}


const deleteUser = (req, res)=>{
    res.status(200).json({message:`delete user ${req.params.id}`})
}


module.exports={
    getAllUsers,getUser,createUser,editUser,deleteUser,
}