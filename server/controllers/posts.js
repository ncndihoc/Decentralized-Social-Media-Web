import Post from '../models/Post.js';

/* Create a post */

export const createPost = async (req, res) => {  
    try {
      const { userID, description, picturePath } = req.body;
      const user = await User.findbyId(userID);
      const newPost = new Post({
        userID,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        description,
        userpicturePath: user.picturePath,
        picturePath,
        likes: {},
        comments: [],
      });

      await newPost.save();

      const post = await Post.find();
      res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }
}

/* Read all posts */
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ userID: req.params.id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}

/* Update a post */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};