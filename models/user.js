const  mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstName : String,
	lastname: String,
	mobile: Number,
	job: String
})
module.exports = mongoose.model('User',userSchema)
