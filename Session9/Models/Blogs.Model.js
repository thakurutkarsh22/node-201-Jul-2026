const { default: mongoose } = require("mongoose");
const validatorPackage = require("validator");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        validate: (value) => {
            // value is $%^$%&$%^&$%^*$%^*$%^*&$%^*$%^*$%^* comming from postman

            for(let i = 0; i < value.length; i++) {
                let char = value[i];

                if(char === ' ' || 
                    (char >= 'a' && char <= 'z') || 
                    (char >= 'A' && char <= 'Z') || 
                    (char >= '0' && char <= '9')) {
                        continue;
                } else {
                    // we have one invalid character in the title
                    return false;
                }
            }

            return true;
        }
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10000,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        validate: (value) => {
            return validatorPackage.isAlpha(value); // it will return true or false
        }
    },
}, {timestamps: true})


const BlogModel = mongoose.model("Blog", blogSchema);
/// "Blog" is a ACTUAL COLLECTION NAME IN THE DATABASE

module.exports = BlogModel;
