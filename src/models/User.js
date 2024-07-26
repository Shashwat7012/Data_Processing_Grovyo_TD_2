const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true }, 
  name: String, 
  email: String, 
  address: String, 
});

// Export the User model based on the schema
module.exports = mongoose.model('User', UserSchema);
