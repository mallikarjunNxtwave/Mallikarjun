const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('newUser', userSchema);

module.exports = User;
