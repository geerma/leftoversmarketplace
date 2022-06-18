const express = require('express')
const router = express.Router()
const { getAllUsers,getUser,createUser,editUser,deleteUser,loginUser,getMe,registerUser}=require('../controllers/userController')


//user Controller
router.get('/users/getAllUsers', getAllUsers)
router.get('/users/getUser', getUser)
// router.post('/users/create',createUser )
router.put('/users/:id',editUser)
router.delete('/users/delete/:id',deleteUser)
router.post('/users/login',loginUser)
router.get('/users/me',getMe)




//registerUser is done, tested in postman, reques bdy should contains:
//username, email, password
router.post('/users/register',registerUser)








const{getAllItems}=require('../controllers/itemController')
// Item Controller
router.post('/items/getAllItems',getAllItems)









module.exports=router