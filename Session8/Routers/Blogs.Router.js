const express = require("express");
const router = express.Router();
const { createBlog, getBlogById, getAllBlogs, editBlogById, deleteBlogById } = require("../Controller/BlogController");
const { BlogInputValidationMiddleware } = require("../Middleware/BlogInputValidationMiddleware");



// create the blog - POST - /api/v1/blogs/createBlog
router.post("/createBlog", BlogInputValidationMiddleware, createBlog);


// i want to get the blog by id 
router.get("/getBlogById/:id", getBlogById);

// i want to get all the blogs 

router.get("/getAllBlogs", getAllBlogs);


// edit the blog, edit by id 
router.put("/editBlogById/:id", editBlogById);


// deete by id
router.delete("/deleteBlogById/:id", deleteBlogById);

module.exports = router;