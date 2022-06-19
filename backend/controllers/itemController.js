const express= require('express')
const Item= require('../models/Item')
const asyncHandler = require('express-async-handler')


const getAllItems = async (req, res)=>{
    try {
        const items=await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({messgae:error.message})
    }
}


// price:{type: String, default:"0.0"},
//     expirationDate: {type:Date, default:Date.now},
//     nameOfItem: {type: String},
//     description: {type: String},
//     ingredients_allergens: {type: String},
//     itemCreationDate: {type:Date, default:Date.now},

const getItem= async (req, res)=>{
    const {nameOfItem} = req.body
    const item= await Item.findOne({nameOfItem})
    if(item){
        res.status(200).json({
            message: "Item Found!"})
    }else{
        res.status(400)
        throw new Error('Item not found')
    }
}


// price:{type: String, default:"0.0"},
// expirationDate: {type:Date, default:Date.now},
// nameOfItem: {type: String},
// description: {type: String},
// ingredients_allergens: {type: String},
// itemCreationDate: {type:Date, default:Date.now},

const uploadItem=asyncHandler( async (req,res)=>{
    const {price,expirationDate,nameOfItem,description,ingredients_allergens} = req.body

    if (!price||!expirationDate||!nameOfItem||!description||!ingredients_allergens){
        res.status(400)
        throw new Error('please fillin all five required fields')
    }
    const item= await Item.create({
        price,expirationDate,nameOfItem,description,ingredients_allergens
    })

    if(item){
        res.status(201).json({
            price:item.price,
            expirationDate:item.expirationDate,
            nameOfItem:item.nameOfItem,
            description:item.description,
            ingredients_allergens:item.ingredients_allergens,
            message:"item uploaded"
        })

    }else{
        res.status(400)
        throw new Error('Invalid entry')
    }
})


const deleteItem=asyncHandler( async (req,res)=>{
    const {nameOfItem} = req.body
    const item= await Item.findOneAndDelete({nameOfItem})
    if(item){
        res.status(200).json({message: "deletion completed"})
    }else{
        res.status(400)
        throw new Error('Invalid deletion')
    }
})



module.exports={
    getAllItems,getItem,uploadItem,deleteItem
}