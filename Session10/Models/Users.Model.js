const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 100,
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
}, {timestamps: true})


const UserModel = mongoose.model("User", userSchema);
/// "User" is a ACTUAL COLLECTION NAME IN THE DATABASE

module.exports = UserModel;