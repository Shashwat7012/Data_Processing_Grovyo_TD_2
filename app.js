const express = require('express'); 
const connectDB = require('./src/config/database'); 
const dataRoutes = require('./src/routes/dataRoutes'); 
require('dotenv').config(); 

const app = express();

connectDB();

app.use(express.json());


app.use('/api/data', dataRoutes);


const PORT = process.env.PORT; 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
