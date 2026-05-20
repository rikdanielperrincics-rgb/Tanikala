import Post from "../models/postModel.js";

export const addPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

export const getPost = async (req, res) => {
    try {
        const postData = await Post.findById(req.params.id);
        if (!postData) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const postData = await Post.find();
        if (!postData) {
            return res.status(404).json({ error: 'No posts found' });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, postTags } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, content, postTags },
        );

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
        return res.status(404).json({
            error: "Post not found"
        });
        }

        res.status(200).json({
        message: "Post deleted successfully",
        post: deletedPost
        });

    } catch (err) {
        res.status(500).json({
        error: err.message
        });
    }
};

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { email } = req.body;

        const post = await Post.findById(id);

        if (!post) {
        return res.status(404).json({ error: "Post not found" });
        }

        const isLiked = post.likedBy.includes(email);

        const update = isLiked
        ? { $pull: { likedBy: email } }    
        : { $addToSet: { likedBy: email } } 

        const updatedPost = await Post.findByIdAndUpdate(id, update, {
        new: true
        });

        res.status(200).json(updatedPost);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { author, content } = req.body;

        const post = await Post.findById(id);

        if (!post) {
        return res.status(404).json({ error: "Post not found" });
        }

        const newComment = {
        id: Date.now(), // simple unique id
        author,
        date: new Date().toLocaleString(),
        content,
        likedBy: []
        };

        post.commentsList.push(newComment);

        await post.save();

        res.status(200).json({
        message: "Comment added successfully",
        post
        });

    } catch (err) {
        res.status(500).json({
        error: err.message
        });
    }
};

export const likeComment = async (req, res) => {
    try {
        const { postId, commentId } = req.params;
        const { email } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        const comment = post.commentsList.id(commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        const isLiked = comment.likedBy.includes(email);
        if (isLiked) {
            comment.likedBy.pull(email);
        } else {
            comment.likedBy.push(email);
        }

        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};