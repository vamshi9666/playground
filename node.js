// const express = require('express')
//
// const bodyParser = require('body-parser');
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

var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema = require('./schema')
const mongoose = require('mongoose');

mongoose.connect('mongodb://pg:pg1234@ds163330.mlab.com:63330/bunny_rest');

const con = mongoose.connection;
con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', () => {
  console.log("--Databse connectin opened--");
})


const port = 4000
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(port, () => console.log(`Now browse to https://localhost:${port}/graphql`));
