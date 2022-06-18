const express = require('express')
const router = express.Router()
const { getAllUsers,getUser,createUser,editUser,deleteUser,loginUser,getMe,registerUser}=require('../controllers/userController')


//user Controller
router.get('/users/getUser', getUser)
// router.post('/users/create',createUser )
router.put('/users/:id',editUser)
router.delete('/users/delete/:id',deleteUser)




///---------------Endpoints below is tested------------------------------------------------------
//registerUser is done, tested in postman, reques bdy should contains:
//username, email, password
router.get('/users/getAllUsers', getAllUsers)
router.post('/users/register',registerUser)
router.post('/users/login',loginUser)
router.get('/users/me',getMe)



const{getAllItems,uploadItem}=require('../controllers/itemController')
// Item Controller
router.get('/items/getAllItems',getAllItems)
router.post('/items/uploadItem',uploadItem)










module.exports=router