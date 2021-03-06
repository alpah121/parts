var express = require('express');
var router = express.Router();
var admin = require('./admin');
var config = require('../config.json');

var part = require('../models/part');



router.get('/', function(req, res) {
	res.render('home');
	});

router.get('/search', function(req, res) {
	if (req.query.hasOwnProperty('q'))
	{
	part.find({ keywords: req.query.q}, 
	function (err, parts) 
		{
		if (err) console.log(err);
		res.render('results', {results: parts});
		});
	}
	else
	{
	console.log(req.query.q);
	res.render('results', {results: [
	{title: 'wheel of pressure washer', goesTo: 'pressure washer', link: 'amazon.com/pressure-washer-wheel'},
	{title: 'wheel of log cutter', goesTo: 'log cutter', link: 'amazon.com/log-cutter-wheel'},
	{title: 'sprocket', goesTo: 'dirt bike', link: 'amazon.com/sprocket'},
	
	]});
	}
});

router.post('/signIn', admin.checks.signIn, admin.posts.signIn)

router.get('/dashboard', admin.checks.hasAccess, admin.pages.dashboard);


module.exports = router;
