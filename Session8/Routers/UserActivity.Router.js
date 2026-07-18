const express = require("express");
const { getAllUsers, getUsersByGender, getUserByName } = require("../Controller/UserActivityController");
const PasswordAuthMiddleware = require("../Middleware/PasswordAuthMiddleware");
const router = express.Router();

router.get("/getAllUsers", PasswordAuthMiddleware, getAllUsers);
router.get("/getBygender", PasswordAuthMiddleware, getUsersByGender);
router.get("/getUserByName/:name", getUserByName);

module.exports = router;