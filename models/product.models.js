const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "name must be at least 3 character"],
        maxLength: [15, "max char is 15 "],
        trim: true
    },
    description: {
        type: String,
        required: true,
        minLength: [3, "min char is 3"],
        trim: true


    },
    image: {
        type: String,
        trim: true

    },
    category: {
        type: String,
        enumeration: ["Clothes", "Fashion", "Electronics", "Sports"],
        trim: true
    },
    price: {
        type: Number,
        required: true,
        minLength: [1],
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: false
    },

},
    {
        ver
    })
const product = mongoose.model(`Product`, productSchema)
module.exports = product