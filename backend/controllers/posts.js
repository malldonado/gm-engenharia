const fs = require("fs");
const path = require("path");
const PostsData = require("../models/PostsData");

exports.getAllPostsData = async (req, res) => {
  try {
    // Busca todos os posts no banco de dados
    const posts = await PostsData.find();

    res.status(200).json({ data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred during processing" });
  }
};
exports.updatePostsData = async (req, res) => {
  try {
    const { title } = req.body;
    const file = req.file ? req.file.filename : null;

    const lastData = await PostsData.findOne().sort({ _id: -1 }).limit(1);

    let lastImage = null;
    if (lastData && lastData.file) {
      lastImage = lastData.file;
    }

    const updatedData = await PostsData.findOneAndUpdate(
      {},
      {
        title: title,
        file: file,
      },
      { new: true }
    );

    if (lastImage) {
      fs.unlink(path.join(__dirname, "../uploads/", lastImage), (err) => {
        if (err) {
          console.error("Erro ao remover a última imagem:", err);
        } else {
          console.log("Última imagem removida com sucesso:", lastImage);
        }
      });
    }

    if (!updatedData) {
      return res.status(404).json({ message: "No data found" });
    }

    res
      .status(200)
      .json({ message: "Data updated successfully!", data: updatedData });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "An error occurred during processing" });
  }
};

exports.createPostData = async (req, res) => {
  try {
    const postCount = await PostsData.countDocuments();

    if (postCount >= 3) {
      return res
        .status(400)
        .json({
          error:
            "Limit of 3 posts reached. Please delete an existing post to add a new one.",
        });
    }

    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    const newPost = new PostsData({
      title: title,
      image: image,
      favorited: false,
    });
    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully!", data: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "An error occurred during processing" });
  }
};

exports.deletePostsData = async (req, res) => {
  try {
    const data = await PostsData.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting data");
  }
};

exports.favoritePostsData = async (req, res) => {
  try {
    const { id } = req.params;
    const { favorited } = req.body;

    if (favorited) {
      await PostsData.updateMany({ _id: { $ne: id } }, { favorited: false });
    }

    await PostsData.findByIdAndUpdate(id, { favorited });

    res.json({
      success: true,
      message: "Post favorite status updated successfully",
    });
  } catch (error) {
    console.error("Error updating favorite status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getFavoriteStatus = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostsData.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    if (!post.favorited) {
      return res.json({ success: true, message: "Post is not favorited" });
    }
    res.json({ success: true, favorited: post.favorited });
    console.log("Post favorited status:", post.favorited);
  } catch (error) {
    console.error("Error fetching favorite status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getAllFavoritePosts = async (req, res) => {
    try {
      const favoritedPosts = await PostsData.find({ favorited: true });
      res.json({ success: true, data: favoritedPosts });
    } catch (error) {
      console.error("Error fetching favorited posts:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
};

exports.getFavoriteImages = async (req, res) => {
  try {
    const favoritedPosts = await PostsData.find({ favorited: true });
    const favoriteImages = favoritedPosts.map(post => post.image);
    res.json({ success: true, data: favoriteImages });
  } catch (error) {
    console.error("Error fetching favorite images:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostsData.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, message: "Imagem não encontrada" });
    }
    res.json({ success: true, data: post.image });
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};