const BlogModel = require("../Models/Blogs.Model");
const { BlogService } = require("../Services/BlogsService");
const fs = require("fs");

async function createBlog(req, res) {

    const { title, content, author = "Anonymous" } = req.body;



    // we need to save this object in databse 

    try {
        const response = await BlogService.createBlog({title, content, author});
        if(response.error) {
            return res.status(500).json({
                message: "Error creating blog, server error",
                error: response.message,
            });
        } else {
            return res.status(201).json({
                message: "Blog created successfully",
                data: response,
            });
        }
    }
    catch(error) {
        return res.status(500).json({
            message: "Error creating blog, server error",
            error: error,
        });
    }
}

async function getBlogById(req, res) {
  // 1. get the blog id from the request params
  const { id } = req.params; // 6a0204b13c0dfe8071a53cc2

  try {
    const response = await BlogService.getBlogById(id);

    if(response.error) {
        console.log("response", response);
        fs.appendFileSync("../error.txt", "error: getBlogById" + response);
      return res.status(500).json({
        message: "Error fetching blog, server error",
        error: response,
      });
    } else {
      return res.status(200).json({
        message: "Blog fetched successfully",
        data: response,
      });
    }
  } catch (error) {
    console.log("error", error);
    fs.appendFileSync("../error.txt", "error: getBlogById" + error.message);
    return res.status(500).json({
      message: "Error fetching blog, server error",
      error: error,
    });
  }
  


}

async function getAllBlogs(req, res) {
    try {
        const response = await BlogService.getAllBlogs();
        
        if(response.error) {
            return res.status(500).json({
                message: "Error fetching blogs, server error",
                error: response,
            });
        } else {
            return res.status(200).json({
                message: "Blogs fetched successfully",
                data: response,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching blogs, server error",
            error: error,
        });
        res.status(200).json({
            message: "Blogs fetched successfully",
            data: reposnse,
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

async function deleteBlogById(req, res) {
    const { id } = req.params;
    try {
        const response = await BlogService.deleteBlogById(id);
        if(response.error) {
            return res.status(500).json({
                message: "Error deleting blog, server error",
                error: response,
            });
        } else {
            return res.status(200).json({
                message: "Blog deleted successfully",
                data: response,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting blog, server error",
            error: error,
        });
    }
}

module.exports = {
    createBlog,
    getBlogById,
    getAllBlogs,
    editBlogById,
    deleteBlogById,
}