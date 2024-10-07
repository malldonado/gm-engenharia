exports.getMain = async (req, res) => {
    try {
      res.status(200).json('OK');
    } catch (error) {
      console.error('Error fetching latest data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  }
  