const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // New profile fields
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  phone: { type: String, default: '' },
  country: { type: String, default: '' },
  profession: { type: String, default: '' },
  bio: { type: String, default: '' },
  avatar: { type: String, default: '/api/placeholder/150/150' },

  // New balance field
  balance: { 
    type: Number, 
    default: 5000, 
    min: 0,
    validate: {
      validator: Number.isFinite,
      message: 'Balance must be a valid number'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);