const db = require('../../index.js');
'use strict';

const queryCalls = {
	info: function (info) { 
		console.log('Info: ' + info);
	},
	warning:function (warning) { 
		console.log('Warning: ' + warning);
	},
	error:function (error) { 
		console.log('Error: ' + error);
	},
	test:function(req, res) {
        res.json({'foo':'bar'});
    }
};

module.exports = queryCalls;