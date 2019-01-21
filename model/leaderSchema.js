const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
    name: { type:String, required:true, unique:true },
    country: String,
    age: Number,
    gender: String,
    isAlive: Boolean
});

const Leader = mongoose.model('Leader', leaderSchema);

module.exports = Leader;