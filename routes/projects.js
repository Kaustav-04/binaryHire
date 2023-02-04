const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Projects= require('../model/projectdb')
const path= require('path')
const { query, request } = require('express')
const router2 = express.Router()
router2.use(bodyParser.json())
router2.use(cors())

//comment
router2.post('/newproject', (req, res)=>{
    const projectdetails= req.body.projectetails
    const email= req.body.email
    const projectData= new Projects({projectdetails: projectdetails, email: email})
    projectData.save().then(request=>{
        console.log("Uploaded Successfully")
    }).catch(err=>{
        console.log(err)
    })
})  

router2.get('/allprojects', (req, res)=>{
    Projects.find({}, (err, docs)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({'AllProjects': docs})
        }
    })
})


module.exports = router2