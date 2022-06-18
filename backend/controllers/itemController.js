const express= require('express')
const Item= require('../models/Item')

const getAllItems = async (req, res)=>{
    try {
        const items=await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({messgae:error.message})
    }
}

module.exports={
    getAllItems
}