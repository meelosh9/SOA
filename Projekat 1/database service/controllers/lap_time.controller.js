const {lap_time} = require("../models/lap_time.model")


const AddLapTime = async (req, res)=>{    
    try{ 
        console.log("upao");
        console.log(req.body);
        const lt = await lap_time.create({            
                raceId:req.body.raceId ,
                year:req.body.year,
                round:req.body.round,
                circuitId:req.body.circuitId,
                race_name:req.body.race_name,
                date:req.body.date,
                race_time:req.body.race_time ,
                ciruit_name:req.body.ciruit_name,
                location:req.body.location ,
                country:req.body.country ,
                lat:req.body.lat,
                lng:req.body.lng,
                driverId:req.body.driverId,
                forename:req.body.forename ,
                surname:req.body.surname ,
                nationality:req.body.nationality ,
                lap:req.body.lap ,
                position:req.body.position ,
                lap_time:req.body.lap_time
        })
        console.log("zavrsio");
        res.status(200).send(lt)           
    }catch(err){
        err => res.status(500).send(err.message)
    }
    
}

const GetLapTimes= async (req, res)=>{
    // console.log(req.query);
    try{
        await lap_time.find({raceId : req.query.raceId,driverId : req.query.driverId}).then(result =>{
            res.status(200).send(result)
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const GetLapTime= async (req, res)=>{
    
    // console.log(req);
    try{
        await lap_time.findOne({raceId : req.query.raceId,driverId : req.query.driverId,lap: req.query.lap}).then(result =>{
            console.log(result);
            res.status(200).send(result)
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const UpdateLapTime = async (req,res) => { 
    try {
        let lt = await lap_time.findOne({raceId : req.body.raceId,driverId : req.body.driverId,lap: req.body.lap})
        console.log("log");
        if (lt) { 
            console.log(lt);
            lt.raceId=req.body.raceId 
            lt.year=req.body.year
            lt.round=req.body.round
            lt.circuitId=req.body.circuitId
            lt.race_name=req.body.race_name
            lt.date=req.body.date
            lt.race_time=req.body.race_time 
            lt.circuit_name=req.body.circuit_name
            lt.location=req.body.location 
            lt.country=req.body.country 
            lt.lat=req.body.lat
            lt.lng=req.body.lng
            lt.driverId=req.body.driverId
            lt.forename=req.body.forename 
            lt.surname=req.body.surname 
            lt.nationality=req.body.nationality 
            lt.lap=req.body.lap 
            lt.position=req.body.position 
            lt.lap_time=req.body.lap_time

            await lt.save()
            res.status(200).send("Uspesno promenjeno")
        }
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}

const DeleteLapTime = async (req, res)=>{
    try{
        await lap_time.deleteOne({raceId : req.query.raceId,driverId : req.query.driverId,lap: req.query.lap}).then(()=>{
            res.status(200).send('Uspesno izbrisano')
        }).catch((err)=>{
            res.status(404).send('Korisnik nije pronadjen')
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}


module.exports = {
    AddLapTime,
    GetLapTimes,
    GetLapTime,
    UpdateLapTime,
    DeleteLapTime
}