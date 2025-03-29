const express = require('express');
const { SaveUser,UpdateUser,DeleteUser,GetUser  } = require('../controllers/user.controllers.js');
const router = express.Router();

router.post('/save', SaveUser );
router.post('/update/:id', UpdateUser );
router.get('/get', GetUser );
router.delete('/delete/:id', DeleteUser );

module.exports = router;
