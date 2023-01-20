const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        // required: true
    },
    postId: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        max: 500
    },
    itemType:{
        type: String,
        default: "food"
    },
    bestBy:{
        type: Date,
    },
    name :{
        type: String,
        default: ""
    },
    price:{
        type: String,
        min:0,
        max:200
    },
    pictureURL:{
        type: String,
        default: ""
    }

});

let Post = mongoose.model("Post", PostSchema)

module.exports = Post;