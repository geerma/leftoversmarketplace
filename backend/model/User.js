const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type : String, index:true , unique: true},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    creationDate: {type:Date, default:Date.now},
    imageLink:{type:String, default:""}
});

let User=mongoose.model("User", userSchema)

module.exports = User;