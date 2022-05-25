const express = require('express');
const cors = require('cors');
const app = express();
const axious = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.post('/', async (req, res) => {  
    console.log(req.body);
    const response = await axious.post("http://164.92.201.199:8080/function/nodefn", {input:req.body.input});    

    res.send(JSON.stringify(response.data));
});

var server = app.listen(3000, () => {   
   console.log(`Example app listening at port ${ server.address().port}`)
})