const mongoose = require('mongoose')


const uri = "mongodb+srv://root:root@database.mji1y.mongodb.net/soa?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error',(err)=>{
  console.log(err);
})

db.once('open',()=>{
  console.log('Database conncection established');
})

module.exports = db



