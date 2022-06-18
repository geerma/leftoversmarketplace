const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    price:{type: String, default:"0.0"},
    expirationDate: {type:Date, default:Date.now},
    nameOfItem: {type: String},
    description: {type: String},
    ingredients_allergens: {type: String},
    itemCreationDate: {type:Date, default:Date.now},
});

let Item=mongoose.model("Item", ItemSchema)

module.exports = Item;