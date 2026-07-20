const express = require("express");
const { getAllUsers, getUsersByGender, getUserByName } = require("../Controller/UserActivityController");
const PasswordAuthMiddleware = require("../Middleware/PasswordAuthMiddleware");
const jwtAuthMiddleware = require("../Middleware/JwtAuthMiddleware");
const passport = require("passport");

const router = express.Router();

router.get("/getAllUsers", jwtAuthMiddleware, getAllUsers);

router.get("/getBygender", PasswordAuthMiddleware, getUsersByGender);


const PassportJwtAuthMiddleware = passport.authenticate("jwt", { session: false });

router.get("/getUserByName/:name",PassportJwtAuthMiddleware, getUserByName);

module.exports = router;