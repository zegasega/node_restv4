const Post = require("../models/post");


class PostService {
    static async createPost(data){
        const newPost = await Post.create(data);
        return newPost
    }

    static async getAllPosts(){
        const posts = await Post.findAll();
        return posts;
    }

    static async getPostByID(id){
        const post = await Post.findByPk(id);

        if (!post) throw new Error("Post Not Found");

        return post;
    }

    static async deletePostByID(id) {
        const deleted = await Post.destroy({ where: { id } });
        if (!deleted) throw new Error("Post Not Found");
        return { message: "Post Deleted", id };
    }
}