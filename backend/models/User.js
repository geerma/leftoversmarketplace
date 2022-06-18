const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
const Schema=mongoose.Schema;


const userSchema = new mongoose.Schema({
    username: {type : String},
    email:{type:String},
    password: {type: String},
    creationDate: {type:Date, default:Date.now},
    imageLink:{type:String, default:""}
});

let User=mongoose.model("User", userSchema)

module.exports = User;