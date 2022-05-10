const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lap_timeSchema = new Schema({
    raceId:{
        type:Number,
        required: true,
    },
    year:{
        type:Number,
        required:true
    },
    round:{
        type:Number,
        required:true
    },
    circuitId:{
        type:String,
        required:true,
    },
    race_name:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    race_time:{
        type: Number,
        required:true
    },
    ciruit_name:{
        type: String,
        required:true
    },
    location:{ 
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    lat:{
        type: Number,
        required:true
    },
    lng:{
        type: Number,
        required:true
    },
    driverId:{
        type: Number,
        required:true
    },
    forename:{
        type: String,
        required:true
    },
    surname: {
        type: String,
        required:true
    },
    nationality:{ 
        type: String,
        required:true
    },
    lap: {
        type: Number,
        required:true
    },
    position: {
        type: Number,
        required:true
    },
    lap_time: {
        type: Number,
        required:true
    }
    })


const lap_time = mongoose.model('lap_time', lap_timeSchema);
module.exports = {
    lap_time
}
