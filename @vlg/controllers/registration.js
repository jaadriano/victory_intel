//ToDo

//hash password using bcrypt
//upload photo using s3-bucket
//send verification code
//create route for verify_code

'use strict';

const db 				 = require('../db/index');
const s3Bucket           = require(`${__dirname}/../../@vlg/helpers/s3Bucket`);
const messageBird        = require(`${__dirname}/../../@vlg/helpers/messageBird`);
//const passwordHandler    = require(`${__dirname}/../../@vlg/helpers/passwordHandler`);
const code_generator 	 = require('generate-sms-verification-code');
const User 				 = require('../db/models/user'); //remove after testing
const queryCalls 		 = {

	signup_upload_photo:function(req, res) {

		console.log(req.body);
		console.log(req.body);
		res.json({
			status: 200,
			message: "Successful"
		});
	},
	signup:function(req, res) {
		
		var expiry_offset = new Date(Date.now());
		expiry_offset.setMinutes(expiry_offset.getMinutes() + 5);
		var list = {
			id:req.body.id,
			type:req.body.type,
			full_name:req.body.full_name,
			username:req.body.username,
			password:req.body.password,
			contact_number:req.body.contact_number,
			address:req.body.address,
			image_url:req.body.image_url,
			area_id:req.body.area_id,
			rating:req.body.rating,
			status:req.body.status,
			verification_code:code_generator(4, {type: 'number'}),
			code_expiry:expiry_offset,
			createdAt:req.body.createdAt,
			approvedAt:req.body.approvedAt,
			updatedAt:req.body.updatedAt,
			deletedAt:req.body.deletedAt
		};

		var user1 = new User(list);

		user1.data.save()
		.then(anotherTask => {
			res.json({
				status: 200,
				message: "Successful"
			});
			//send verification code to user
			
		})

		.catch(error => {
			res.json({
				status: 500,
				message: "Error"
			});
		})
    },
    verify_code:function(req, res) {
		console.log(req.body);
		console.log(req.body);
		res.json({
			status: 200,
			message: "Successful"
		});
	},
};
module.exports = queryCalls;

// testing documentation

// var list = {
			// id:'1',
			// type:'admin',
			// full_name:'james adriano',
			// username:'jdadriano',
			// password:'password',
			// contact_number:'09123846',
			// address:'qc',
			// image_url:'url',
			// area_id:'1',
			// rating:'5',
			// status:'active',
			// createdAt:null,
			// approvedAt:null,
			// updatedAt:null,
			// deletedAt:null
		// };
		
		
// var debug = require('debug')('express-sequelize');
// user1.data
// .build(test)
// .save()
// .then(anotherTask => {
// you can now access the currently saved task with the variable anotherTask... nice!
// })
// .catch(error => {
// Ooops, do some error-handling
// });
// user1.set('id', '1');
// user1.set('type', 'admin');
// user1.set('full_name', 'james adriano');
// user1.set('username', 'jdadriano');
// user1.set('password', 'password');
// user1.set('contact_number', '09123846');
// user1.set('address', 'qc');
// user1.set('image_url', 'url');
// user1.set('area_id', '1');
// user1.set('rating', '5');
// user1.set('status', 'active');
// user1.set('createdAt', null);
// user1.set('approvedAt', null);
// user1.set('updatedAt', null);
// user1.set('deletedAt', null);

// console.log(user1);