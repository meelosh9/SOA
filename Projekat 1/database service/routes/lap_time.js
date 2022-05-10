const express = require('express');

const router = express.Router();

const{
    AddLapTime,
    GetLapTimes,
    GetLapTime,
    UpdateLapTime,
    DeleteLapTime
} =  require('../controllers/lap_time.controller');

router.post('/AddLapTime/',AddLapTime)
router.get('/GetLapTimes/',GetLapTimes)
router.get('/GetLapTime/', GetLapTime)
router.put('/UpdateLapTime/', UpdateLapTime)
router.delete('/DeleteLapTime/',DeleteLapTime)


module.exports = router
