require('dotenv').config()

const SECRET_SERVER_PASSWORD = process.env.SECRET_SERVER_PASSWORD;

function PasswordAuthMiddleware(req, res, next) {
    const header = req.headers; // { "Authorization": "asdf1234" }
    const authorization = header.authorization; // "asdf1234"

    // req is bad  - 
    // "asdf1234" !== "asdf1234"
    if(authorization !== SECRET_SERVER_PASSWORD) {
        return res.status(401).json({ message: "Unauthorized form middleware" });
    } else {
        // req is good - 
        next();
    }
}

module.exports = PasswordAuthMiddleware;