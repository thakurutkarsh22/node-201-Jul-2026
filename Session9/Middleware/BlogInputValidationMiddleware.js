const { validatateBlogInput } = require("../Validation/BlogInputValidation");

function BlogInputValidationMiddleware(req, res, next) {
    const blogBody = req.body;

    const validationResponse = validatateBlogInput(blogBody);

    if(validationResponse.isValid) {
        next();
    } else {
        res.status(400).json({
            message: "Invalid blog input from middleware",
            error: validationResponse,
        });
    }
}

module.exports = {
    BlogInputValidationMiddleware,
};