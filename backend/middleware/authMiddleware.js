const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const User = require('../models/User')
let secret="secret123"

const protect= asyncHandler(async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token= req.headers.authorization.split('')[1]

            const decoded = jwt.verify(token,secret)

            req.user= await (await User.findById(decoded.id)).isSelected('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('not authorized,and there is no token')
    }

})

module.exports={protect}