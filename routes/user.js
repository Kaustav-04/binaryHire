const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const path= require('path')
const { query, request } = require('express')
const router = express.Router()
router.use(bodyParser.json())


router.post('/freelancersignup', (req, res)=>{
    const name= req.body.name
    const email= req.body.email
    const phone= req.body.phone
    const password = req.body.password
    const skills= req.body.skills
    const freelancerData= new Freelancer({name:name,email:email, phone:phone, password:password, skills:skills})
    freelancerData.save().then(request=>{
        console.log("Uploaded Successfully")
        res.json({"Auth": true})
    }).catch(err=>{
        console.log(err)
        res.json({"Auth": false})
    })
})


router.post('/freelancerlogin', (req, res)=>{
    const email = req.body.email
    const password = req.body.password
    Freelancer.findOne({email:email}, function(err, docs){
        if(err){
            res.send(err)
        }
        else{
            const pass= docs.password
            if(pass==password){
                res.json({"Auth": true, "Person": "Freelancer"})
                console.log(true)
            }
            else{
                res.json({"Auth": false, "Person": "Freelancer"})
                console.log(false)
            }
        }
    })
})

module.exports = router