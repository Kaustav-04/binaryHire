const express= require('express')
const bodyParser = require('body-parser')
const Client= require('../model/client')
const path= require('path')
const { query, request } = require('express')
const router = express.Router()
router.use(bodyParser.json())



router.post('/clientsignup', (req, res)=>{
    const name= req.body.name
    const email= req.body.email
    const phone= req.body.phone
    const password = req.body.password
    const skills= req.body.skills
    const clientData= new Client({name:name,email:email, phone:phone, password:password, skills:skills})
    clientData.save().then(request=>{
        console.log("Uploaded Successfully")
        res.json({"Auth": true})
    }).catch(err=>{
        console.log(err)
        res.json({"Auth": false})
    })
})



router.post('/clientlogin', (req, res)=>{
    const email = req.body.email
    const password = req.body. password
    Client.findOne({email:email}, function(err, docs){
        if(err){
            res.send(err)
        }
        else{
            const pass= docs.password
            if(pass==password){
                res.json({"Auth": true, "Person": "Client"})
                console.log(true)
            }
            else{
                res.json({"Auth": false, "Person": "Client"})
                console.log(false)
            }
        }
    })
})

module.exports = router