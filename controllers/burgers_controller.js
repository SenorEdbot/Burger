const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObj = {
            burger: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
})

module.exports = router;