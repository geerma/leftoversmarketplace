const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    imageLink: {
        type: String,
        default: ""
    },
    posts: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },

    //add backend admin functionality later
    isAdmin: {
        type: Boolean,
        default: false
    }

    ////add chat property later
    // chat:{
    //     type:Array,
    //     default:[]
    // }
});

let User = mongoose.model("User", userSchema)

module.exports = User;