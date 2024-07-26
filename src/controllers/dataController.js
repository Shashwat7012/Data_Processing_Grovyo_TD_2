const dataService = require('../services/dataService'); 

const generateData = async (req, res) => {
  try {
    const numRows = parseInt(req.params.numRows); 
    await dataService.generateData(numRows); 
    res.status(200).send('Data generated and saved to MongoDB'); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
};


const removeSpecificNames = async (req, res) => {
  try {
    const nameCategory = req.params.nameCategory; 
    await dataService.removeSpecificNames(nameCategory); 
    res.status(200).send(`Names containing '${nameCategory}' removed`); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
};


const queryData = async (req, res) => {
  try {
    const result = await dataService.queryData(req.query); 
    res.status(200).json(result); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
};

module.exports = { generateData, removeSpecificNames, queryData }; 