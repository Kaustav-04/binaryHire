const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const { query } = require('express')
const router = express.Router()
router.use(bodyParser.json())

router.use('/freelancerquery', (req, res)=>{
    Freelancer.findOne({name: "Soham Chakraborty" }, function (err, docs) {
        if (err){
            res.send(err)
        }
        else{
            console.log("Result : ", docs);
            res.json({"Result": docs})  
        }
    });
})

module.exports= router