
const mongoose = require('mongoose');

const uri = "mongodb+srv://ramanandrama9:iK5TpGCSCxLRGzk0@cluster0.adztr.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{
	useUnifiedTopology: true,
	useNewUrlParser: true
});

mongoose.connection.on('connected',()=>{
	console.log('database connected');
	
});

mongoose.connection.on('error',(err)=>{
	console.log('connection error: ',err);
});

module.exports = mongoose;