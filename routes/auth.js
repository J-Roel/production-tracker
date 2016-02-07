ar express = require('express');
var knex = require('../db/knex');

var router = express.Router();



router.post('/authenticate', function (req, res) {


	//TODO validate req.body.username and req.body.password
	//if is invalid, return 401
	if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
		res.send(401, 'Wrong user or password');
		return;
	}

	var profile = {
		first_name: 'John',
		last_name: 'Doe',
		email: 'john@doe.com',
		id: 123
	};

	// We are sending the profile inside the token
	var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

	res.json({ token: token });
});


// /auth/api/restricted
// /api/api/restricted
router.get('/api/restricted', function (req, res) {
  console.log('user ' + req.user.email + ' is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});