const express = require('express');
const router = express.Router();
const authToken = require('../middleware/authToken');
const {
    homepageController,
    gameController,
    loginController,
    authController,
    errorController,
    internalError,
    testError
} = require('../controllers/resController');


router.get('/', homepageController);
router.get('/game', gameController);
router.post('/api/login', loginController);
router.get('/api/me', authToken, authController);
router.get('/test', testError);
router.use('*', errorController);
router.use('*', internalError);

module.exports = router;