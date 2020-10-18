
const mongoose = require('mongoose');

const uri = // mongo db uri;

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