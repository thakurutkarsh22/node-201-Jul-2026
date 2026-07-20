require('dotenv').config();

const JwtStrategy = require('passport-jwt').Strategy; // imports the actual code of jwt strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
// ExtractJwt is a import/package which will be responsible for extracting the jwt from the request


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

// done is like next 
// JwtStrategy is doing jwt.verify()
const strategy = new JwtStrategy(options, (payload, done) => {
    console.log(payload, 'payload in jwt strategy');
    try {
        // if everything is good 
        return done(null, true);
    } catch (error) {
        return done(error, false);
    }
});


module.exports = (passport) => {
    passport.use(strategy);
}
