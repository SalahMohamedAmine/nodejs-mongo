const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userRoutes = require('./api/routes/user');
const mongoose = require('mongoose');


mongoose.connect(
    "mongodb+srv://kali:amine123456@cluster0-bi7rx.mongodb.net/test?retryWrites=true&w=majority    "
)


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    if(req.method ==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    next();
});




app.use("/user",userRoutes);


/*app.use((req,res,next)=> {
    res.status(200).json({
        message : 'ok'
    })
});*/

module.exports = app;