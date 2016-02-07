var express = require('express');
var knex = require('../db/knex');

var router = express.Router();




//ROUTES FOR OUR WELLS

// ALL WELLS
router.get('/wells', function(req, res, next) {

	var data = {};

	data = knex('wells').select().then(function(data){
		res.send(data);
	}).catch(function(err){
		console.log("Error: ", err);
		res.send('There was an error on the server.');
	});
  
});

// WELL BY ID
router.get('/wells/:id', function(req, res, next) {
	
	var data ={};
	
	data = knex('wells').select().where('id', req.params.id).then(function(data){
		res.send(data);
	}).catch(function(err){
		res.send('There was an error on the server.');
	});
});



//WELLS BY FIELD
router.get('/field/:field', function(req, res, next) {
	
	var data ={};

	//VALIDATE FIELD INPUT
	var field = req.params.field;
	if(field == '' || field == null || field == undefined 
		|| field.length > 50 || field.length <= 0 ){
			res.send('Server error - Field Input is not valid.')
	} else {
		//if okay, get info from db
		data = knex('wells').select().where('field', field).then(function(data){
			res.send(data);
		}).catch(function(err){
			res.send('There was an error on the server.');
		});
	}
});

// ALL PRODUCTION
router.get('/production', function(req, res, next) {

	var data = {};

	data = knex('production').select().then(function(data){
		res.send(data);
	}).catch(function(err){
		console.log("Error: ", err);
		res.send('There was an error on the server.');
	});
  
});

// WELL BY ID
router.get('/production/:well_id', function(req, res, next) {
	
	var data ={};
	
	data = knex('production').select().where('well_id', req.params.well_id).then(function(data){
		res.send(data);
	}).catch(function(err){
		res.send('There was an error on the server. Well Production was not returned.');
	});
});


// UPDATE
router.put('/wells/:id', function(req, res, next) {
	
	console.log(data)

	// var leaseName = req.body.leaseName;
	
	// var apn = req.body.apn;
	
	// var field = req.body.field;
    
 //    var county = req.body.county;
    
 //    var state: req.body.state,


 //        equipment: 'Pumping Unit, Separator, Meter Shed',
 //        meterType: 'Barton',
 //        latitude: '',
 //        longitude: '',
 //        asDrilledLat: '',
 //        asDrilledLong: '',
 //        legals: '',
 //        coefficient: 0.886,
 //        plateSize: 0.375

	// knex('books').returning('id').where({ id: req.params.id }).update({
	//  	leaseName: 'Helling 6-13', 
 //        apn: '', 
 //        field: 'Bonny',
 //        county: 'Yuma',
 //        state: 'CO',
 //        equipment: 'Pumping Unit, Separator, Meter Shed',
 //        meterType: 'Barton',
 //        latitude: '',
 //        longitude: '',
 //        asDrilledLat: '',
 //        asDrilledLong: '',
 //        legals: '',
 //        coefficient: 0.886,
 //        plateSize: 0.375

	// }).then(function(countInserted){
	// 	res.send(countInserted);
	// }).catch(function(err){
	// 	res.send('There was an error on the server.');
	// });
});


// NEW
router.post('/', function(req, res, next) {
	var data ={};

	var bookname = req.body.bookname;
	var author = req.body.author;
	var bookDescription = req.body.bookDescription;
	var imageUrl = req.body.imageUrl;

	knex('books').insert({
		bookName : bookname,
		author : author,
		bookDescription : bookDescription,
		imageUrl : imageUrl
	}).then(function(countInserted){
		res.send('Added new entry: ', countInserted);
	}).catch(function(err){
		res.send('There was an error on the server.');
	});

});

// DELETE
router.delete('/:id', function(req, res, next) {

	var didDelete = knex('books').where({ id : req.params.id }).del().then(function(success){
		res.send('Delete Successful');
	}).catch(function(err){
		res.send('There was an error on the server.');
	});
});


module.exports = router;







    /* END OF FILE */