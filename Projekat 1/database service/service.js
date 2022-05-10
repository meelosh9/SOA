const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const db = require('./config/db.config')

const lap_time = require('./routes/lap_time');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.use('/api/lap_time',lap_time)   

app.listen(5000,()=>{
    console.log("App listening on port 5000");
})