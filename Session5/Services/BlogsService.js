const BlogModel = require("../Models/Blogs.Model");

// IOC, Di - Dependency Injection - Inversion of Control - 
class BlogService {

    static async createBlog({title, content, author = "Anonymous"}) {
        // 1. handle the business logic 
        //  create the blog object - business logic
        const blog = new BlogModel({ title, content, author });

        // 2. talking to database 
        try {
            const response = await blog.save();
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async getBlogById(blogId) {

    }

    static async getAllBlogs() {

    }
    
    static async editBlogById(blogId, blogBody) {

    }

    static async deleteBlogById(blogId) {

    }
}

module.exports = {
    BlogService,
};