const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var redis = require("redis"),
    client = redis.createClient({
	port:19634,
	host:'redis-19634.c61.us-east-1-3.ec2.cloud.redislabs.com',
	password: 'goredis'
});
var cachegoose = require('cachegoose');

client.on('connect', function() {
    console.log(' Redis connected');
});

var data = JSON.stringify(fs.readFileSync('./models/data.json', 'utf8'));
// client.set("test", data,'EX', 60 )
// client.get("test", (err, res) => {
// 	console.log(JSON.parse(res))
// })

const app = express()
mongoose.connect('mongodb://test:test12@ds135750.mlab.com:35750/todo-server');
const con = mongoose.connection;
con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', () => console.log("-----Databse connection opened----"))



cachegoose(mongoose, {
	engine : 'redis',
	port:19634,
	host:'redis-19634.c61.us-east-1-3.ec2.cloud.redislabs.com',
	password: 'goredis'
})



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
app.use('/post', postRoutes)

app.use('/redis', userRoutes)

const port = 3000

app.listen(port,()=>{
	console.log(`Server listensing on port ${port}`)
})
// const express = require('express');
// const  graphqlHTTP = require('express-graphql');
// const schema = require('./schema')
//
// const port = 4000

// const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
// }));

// app.listen(port, () => console.log(`Now browse to https://localhost:${port}/graphql`));
