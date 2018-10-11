'use strict';
const controller = require('../controllers/search');
const registration = require('../controllers/registration');

module.exports = (function() {
    const router = require('express').Router();

    router.get('/', controller.test);
	router.get('/test', controller.info);
	router.post('/signup', registration.signup);
	router.post('/signup/upload_photo', registration.signup_upload_photo);
	router.post('/signup/verify_code', registration.verify_code);

    return router;
})();