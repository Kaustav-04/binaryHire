const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const { query } = require('express')
const router3 = express.Router()
router3.use(bodyParser.json())

router3.use('/freelancerquery', (req, res)=>{
    const email= req.body.json
    Freelancer.findOne({email: email }, function (err, docs) {
        if (err){
            res.send(err)
        }
        else{
            console.log("Result : ", docs);
            res.json({"Result": docs})  
        }
    });
})

router3.post('/freelancerprojectlist', (req, res)=>{
    const email= req.body.name
    const projectnamelist = req.body.projectnamelist
    Freelancer.findOne({email: email}, function (err, docs) {
        if (err){
            res.send(err)
        }
        else{
            docs.projects.push({projectnamelist:projectnamelist})
            res.json({"Result": docs}) 
        }
    });
})

module.exports= router3