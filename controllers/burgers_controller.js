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

router.put("/api/burger/:id", (req, res)=>{
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result)=>{
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;