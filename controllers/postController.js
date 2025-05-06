const PostService = require('../services/PostService');
const BaseController = require('/BaseController');

class PostController extends BaseController {
  
  static async createPost(req, res) {
    try {
      const postData = req.body;
      const newPost = await PostService.createPost(postData);
      this.sendResponse(res, newPost, "Post Created Successfully", 201);
    } catch (error) {
      this.sendError(res, error);
    }
  }

  
  static async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      this.sendResponse(res, posts, "Posts Retrieved Successfully");
    } catch (error) {
      this.sendError(res, error);
    }
  }

 
  static async getPostByID(req, res) {
    try {
      const postId = req.params.id;
      const post = await PostService.getPostByID(postId);
      this.sendResponse(res, post, "Post Retrieved Successfully");
    } catch (error) {
      this.sendError(res, error);
    }
  }

 
  static async deletePostByID(req, res) {
    try {
      const postId = req.params.id;
      await PostService.deletePostByID(postId);
      this.sendResponse(res, null, "Post Deleted Successfully");
    } catch (error) {
      this.sendError(res, error);
    }
  }
}

module.exports = PostController;
