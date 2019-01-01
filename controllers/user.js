const faker = require('faker');
const User = require('../models/user')
const redisCLient = require('redis').createClient({
	port:19634,
	host:'redis-19634.c61.us-east-1-3.ec2.cloud.redislabs.com',
	password: 'goredis'
});
exports.get_all = async  (req,res,next ) => {
	try {
		let data = await User.find({}).cache (30)
		console.log( " \n got data \n ", data)
		res.status(200).json( data)
	}
	catch (err){
		console.log ( "error in fetching users", err.message);
		res.status(404).json({message: 'error happend ', err})
	}
 	

}

exports.add_user = (req,res,next ) => {
	const user = new User({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		mobile:req.body.mobile,
		job: req.body.job
		})
	user.save()
		.then (result => {
			console.log( " \n got data \n ", result)
			redisCLient.set(result._id, result, 'EX', 30);
			res.status(200).json(result)	
		} )
}

exports.add_bulk_users = (req,res,next )=> {
	for ( var i = 0 ; i < 10; i ++){
		try {
			let user = new User({
			firstname : faker.name.firstName(),
			lastname : faker.name.lastName(),
			mobile : faker.random.number(),
			job: faker. name.jobTitle()
			})
			user.save()
				.then (res => {
					console.log("user Created successfully  ")
				})
		}
		catch (err){
			console.log( "err  ", err)
			res.status(303).json({message:" error "})
		}
		
	}	
	res.status(200).json({message : "Inserted"})
}