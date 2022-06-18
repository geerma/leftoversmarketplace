const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    price:{type:Float},
    expirationDate: {type:Date, default:Date.now},
    name: {type: String},
    description: {type: String},
    Ingredients_and_allergens: {type: String},
    ItemCreationDate: {type:Date, default:Date.now},
});

let Item=mongoose.model("Item", itemSchema)

module.exports = Item;