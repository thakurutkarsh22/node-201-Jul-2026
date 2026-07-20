const Joi = require("joi");


const blogInputValidationSchema = Joi.object({
    title: Joi.string().required().min(3).max(100).pattern(/^[a-zA-Z0-9\s]+$/),
    content: Joi.string().required().min(10).max(10000),
    author: Joi.string().required().min(3).max(100).pattern(/^[a-zA-Z\s]+$/),
});



/**
 * 
 * blogBody - postman body 
 * {
    "title": "India won by 4 runs",
    "content": "Hello world, t$#%$%#$^#$&^#$&$#&his is my first blog post.",
    "author": "uthakur",
    "jabsdlvjabslasdkjbgvlasjkbga": "asdfjaslfjasldfbglasuidfgasl",
    "bogusKey": "asfgalsfdgu"
}
 * 
 */
function validatateBlogInput(blogBody) {
    const response = blogInputValidationSchema.validate(blogBody);
    const error = response.error;
    if(error) {
        return {
            isValid: false,
            error: error,
        };
    }
    return {
        isValid: true,
    };
}

module.exports = {
    validatateBlogInput,
};