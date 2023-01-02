import Post from "../../models/post.js";

export const getPosts = (req, res) => {
  Post.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};

export const getPost = async (req, res) => {
  let foundPost = await Post.findOne({ _id: req.params.id });
  res.send(foundPost);
};

export const addPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });
  await post.save();
  res.send(post);
};

export const updatePost = async (req, res) => {
  try {
    let foundPost = await Post.findOne({ _id: req.params.id });

    if (req.body.title) {
      foundPost.title = req.body.title;
    }

    if (req.body.body) {
      foundPost.body = req.body.body;
    }

    await foundPost.save();
    res.send(foundPost);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndRemove(id).exec();
  res.send("Deleted");
};
