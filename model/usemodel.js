// models/User.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user', )


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: false },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true
});

const user= mongoose.model('User', userSchema);


module.exports = user;


