import express from "express";
import { addPost, getAllPosts, getPost, updatePost, deletePost, likePost, addComment, likeComment } from "../controllers/postController.js";

const route = express.Router();

route.post('/post', addPost);
route.get('/post/:id', getPost);
route.get('/posts', getAllPosts);
route.put('/post/update/:id', updatePost);
route.delete('/post/delete/:id', deletePost);
route.put('/post/like/:id', likePost)
route.put('/post/comment/:id', addComment)
route.put('/post/:postId/comment/:commentId/like', likeComment);

export default route;