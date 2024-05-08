const aboutData = require('../models/AboutData');
const fs = require('fs');
const path = require('path');

exports.updateAboutData = async (req, res) => {
  try {
    const { title, text } = req.body;
    const file = req.file ? req.file.filename : null;

    const lastData = await aboutData.findOne().sort({ _id: -1 }).limit(1);

    let lastImage = null;
    if (lastData && lastData.file) {
      lastImage = lastData.file;
    }

    const updatedData = await aboutData.findOneAndUpdate({}, {
      title: title,
      text: text,
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

exports.getAboutLastData = async (req, res) => {
  try {
    const latestData = await aboutData.findOne().sort({ _id: -1 }).limit(1);

    if (!latestData) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.status(200).json(latestData);
  } catch (error) {
    console.error('Error fetching latest data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}
