const express = require("express");
const { getAllUsers, getUsersByGender, getUserByName } = require("../Controller/UserActivityController");
const PasswordAuthMiddleware = require("../Middleware/PasswordAuthMiddleware");
const jwtAuthMiddleware = require("../Middleware/JwtAuthMiddleware");

const router = express.Router();

router.get("/getAllUsers", jwtAuthMiddleware, getAllUsers);

router.get("/getBygender", PasswordAuthMiddleware, getUsersByGender);

router.get("/getUserByName/:name", getUserByName);

module.exports = router;