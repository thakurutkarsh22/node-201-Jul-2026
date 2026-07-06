const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10000,
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
}, {timestamps: true})


const BlogModel = mongoose.model("Blog", blogSchema);
/// "Blog" is a ACTUAL COLLECTION NAME IN THE DATABASE

module.exports = BlogModel;
