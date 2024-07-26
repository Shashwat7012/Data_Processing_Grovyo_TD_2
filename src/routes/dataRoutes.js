const express = require('express'); 
const router = express.Router(); 
const dataController = require('../controllers/dataController'); 

router.post('/generate/:numRows', dataController.generateData);

router.delete('/remove/:nameCategory', dataController.removeSpecificNames);


router.get('/query', dataController.queryData);

module.exports = router; 
