const express= require('express')
const bodyParser = require('body-parser')
const Projects= require('../model/projectdb')
const path= require('path')
const { query, request } = require('express')
const router2 = express.Router()
router2.use(bodyParser.json())


router2.post('/newproject', (req, res)=>{
    const projectname= req.body.projectname
    const projectdesc= req.body.projectdesc
    const skills= req.body.skills
    const rate = req.body.rate
    const projectData= new Projects({projectname:projectname, projectdesc:projectdesc, skills:skills, rate:rate })
    projectData.save().then(request=>{
        console.log("Uploaded Successfully")
    }).catch(err=>{
        console.log(err)
    })
})  


module.exports = router2