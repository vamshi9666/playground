// const express = require('express')
// const mongoose = require('mongoose');
//
// const bodyParser = require('body-parser');
// mongoose.connect('mongodb://localhost/first');
//
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, 'connection error:'));
// con.once('open',()=>{
// 	console.log("--Databse connectin opened--");
// })
//
// const app = express()
//
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// const postRoutes = require('./routes/post')
// app.use('/post', pos)
//
// const port = 3000
//
// app.listen(port,()=>{
// 	console.log(`Server listensing on port ${port}`)
// })
var probe = require('probe-image-size');

let getImageDims = async(url) => {

    await probe(url).then(result => {
        const {
            width,
            height
        } = result
        const outString = `${height}|${width}`
        console.log(outString);
        return outString;
    });
}

getImageDims('https://www.azindia.com/ClassifiedImages/6A4F1F2D-05DA-49E5-85FF-F8B60A4DF827_12261.jpeg')
