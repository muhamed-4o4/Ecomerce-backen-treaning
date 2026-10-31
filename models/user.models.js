const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'min char is 3'],
        maxLength: [12, 'max char is 12']
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'min char is 3'],
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    isDeleted: {
        type: Boolean,
        default: false,
        select: false
    },
    confirmOTP: {
        type: String
    },
    otpDate: {
        type: Date
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    resetToken: {
        type: String,
    },
    resetPassword: {
        type: String,
    },
    resetDate: {
        type: Date,
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)
const user = mongoose.model(`User`,userSchema)
module.exports = user