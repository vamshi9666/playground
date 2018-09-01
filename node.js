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

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
		message:String,
		user : String
  },
	type message {
		message: String
	},
	type user {
		likes: String,
		bio: String
	}
`);

var root = {
	hello: () => " hey ",
	message: () => 'Hello world!',
	likes : () => {
		const response = {
			"likes":5,
			"comments":45
		}
		return response
	},
	bio: () =>{
		return "this is bio"
	}
 };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
