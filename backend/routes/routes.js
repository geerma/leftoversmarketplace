const express = require('express')
const router = express.Router()
const { getAllUsers,getUser,createUser,editUser,deleteUser,}=require('../controllers/userController')


//user Controller
router.get('/users/getAllUsers', getAllUsers)
router.get('/users/get/:id', getUser)
router.post('/users/create',createUser )
router.put('/users/:user_id',editUser)
router.delete('/users/delete/:id',deleteUser)





//Post Controller










module.exports=router