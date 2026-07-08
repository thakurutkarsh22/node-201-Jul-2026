const BlogModel = require("../Models/Blogs.Model");

async function createBlog(req, res) {

    const { title, content, author = "Anonymous" } = req.body;

    //  create the blog object 
    const blog = BlogModel({ title, content, author });

    // we need to save this object in databse 

    try {
        const response = await blog.save();
        
        res.status(201).json({
            message: "Blog created successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating blog, server error",
            error: error,
        });
    }

}

function getBlogById(req, res) {

}

async function getAllBlogs(req, res) {
    try {
        const reposnse = await BlogModel.find({});
        res.status(200).json({
            message: "Blogs fetched successfully",
            data: reposnse,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching blogs, server error",
            error: error,
        });
    }
}

async function editBlogById(req, res) {
    const { id } = req.params;

    try {
        const response = await BlogModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Blog edited successfully",
            data: response,
        });
    } catch(error) {
        res.status(500).json({
            message: "Error editing blog, server error",
            error: error,
        });
    }
}

function deleteBlogById(req, res) {

}

module.exports = {
    createBlog,
    getBlogById,
    getAllBlogs,
    editBlogById,
    deleteBlogById,
}