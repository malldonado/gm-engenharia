const fs = require('fs');
const path = require('path');
const PostsData = require("../models/PostsData");

// exports.getPostsData = async (req, res) => {
//   try {
//     const latestData = await aboutData.findOne().sort({ _id: -1 }).limit(1);

//     if (!latestData) {
//       return res.status(404).json({ message: 'No data found' });
//     }
//     res.status(200).json(latestData);
//   } catch (error) {
//     console.error('Error fetching latest data:', error);
//     res.status(500).json({ error: 'An error occurred while fetching data' });
//   }
// }

exports.getAllPostsData = async (req, res) => {
  try {
    // Busca todos os posts no banco de dados
    const posts = await PostsData.find();

    res.status(200).json({ data: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'An error occurred during processing' });
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

    const updatedData = await PostsData.findOneAndUpdate({}, {
      title: title,
      file: file
    }, { new: true });

    if (lastImage) {
      fs.unlink(path.join(__dirname, '../uploads/', lastImage), (err) => {
        if (err) {
          console.error('Erro ao remover a última imagem:', err);
        } else {
          console.log('Última imagem removida com sucesso:', lastImage);
        }
      });
    }

    if (!updatedData) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json({ message: 'Data updated successfully!', data: updatedData });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'An error occurred during processing' });
  }
};

exports.createPostData = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;

    const newPost = new PostsData({
      title: title,
      image: image
    });
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully!', data: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'An error occurred during processing' });
  }
};

exports.deletePostsData = async (req, res) => {
  try {
    const data = await PostsData.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting data');
  }
}