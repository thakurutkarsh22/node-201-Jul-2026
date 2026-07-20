const express = require("express");
const router = express.Router();
const { HomePageResponse, AboutPageResponse, ContactPageResponse } = require("../Controller/HomeController");
const PasswordAuthMiddleware = require("../Middleware/PasswordAuthMiddleware");


router.get("/", PasswordAuthMiddleware, HomePageResponse);
router.get("/home", HomePageResponse);
router.get("/about", AboutPageResponse);
router.get("/contact", ContactPageResponse);


module.exports = router;