const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    postid: {type : Integer},
    postContent: {type: String},
    postLocation: {type: String},
    productType: {type: String},
    creationDate: {type:Date, default:Date.now},
});

let Post=mongoose.model("Post", postSchema)

module.exports = Post;