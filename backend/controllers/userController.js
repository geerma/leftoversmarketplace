
//@description Get Users
//@route Get /api/users
//@access Private
const getUsers = (req, res)=>{
    res.status(200).json({message:'get user'})
}



//@description set User
//@route POST /api/users
//@access Private
const setUser = (req, res)=>{
    res.status(200).json({message:'set users'})
}



//@description update Users
//@route PUT /api/users/:id
//@access Private
const updateUser = (req, res)=>{
    res.status(200).json({message:`update user ${req.params.id}`})
}




//@description Delete user
//@route DELETE /api/users/:id
//@access Private
const deleteUser = (req, res)=>{
    res.status(200).json({message:`delete user ${req.params.id}`})
}


module.exports={
    getUsers,setUser,updateUser,deleteUser,
}