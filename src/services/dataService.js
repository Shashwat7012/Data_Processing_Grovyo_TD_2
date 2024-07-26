const { faker } = require('@faker-js/faker'); 
const User = require('../models/User'); 


const generateData = async (numRows) => {
  console.time('Data Generation'); 
  const data = []; 

  
  for (let i = 0; i < numRows; i++) {
    
    data.push({
      id: i + 1,
      name: faker.person.fullName(), 
      email: faker.internet.email(),
      address: faker.address.streetAddress()
    });

    if ((i + 1) % 1000000 === 0) {
      console.log(`${i + 1} rows generated`);
    }
  }

 
  await User.insertMany(data);
  console.timeEnd('Data Generation'); 
  console.log('Data generation complete and saved to MongoDB'); 
};

const removeSpecificNames = async (nameCategory) => {
  console.time('Data Manipulation'); 
  await User.deleteMany({ name: new RegExp(nameCategory, 'i') }); 
  console.timeEnd('Data Manipulation'); 
  console.log(`Names containing '${nameCategory}' removed`); 
};


const queryData = async (query) => {
  console.time('Query Performance'); 
  const result = await User.find(query).exec();
  console.timeEnd('Query Performance'); 
  return result; 
};

module.exports = { generateData, removeSpecificNames, queryData }; 