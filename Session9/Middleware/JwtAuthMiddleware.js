const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

function jwtAuthMiddleware(req, res, next) {
    // 1. get the token from the header
    const headerToken = req.headers?.authorization; // Bearer <token>
    const token = headerToken?.split(" ")[1]; // <token>


    // 2. verify the token
    jwt.verify(token, JWT_SECRET, (error, decodedPayload) => {
        if(error) {
            // its a bad requst 
            return res.status(401).json({
                message: "Unauthorized",
                error: error,
            });
        } else {
            // its a good request
            console.log(decodedPayload, 'decoded payload in middleware') 
            next();
        }
    })

}

module.exports = jwtAuthMiddleware;