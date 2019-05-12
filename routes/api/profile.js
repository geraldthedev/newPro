const express = require('express');
const router = express.Router();
const User = require('../../models/Users');


router.get('/', (req, res)=>{
    User.find()
        .then(users => res.json(users))
        res.send("welcome")
});


router.post('/server.js',(req,res)=>{
    res.send(req.body)
})

module.exports = router;