const express = require('express');
const router = express.Router();
const db = require('../config/db')
 

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req, res) => {
    res.send(console.log("this is test!!"));
})
 

router.get('/signup', (req,res) => {
    res.send({data : 'data'})
})



router.get('/customer', (req, res) => {

});

module.exports = router;