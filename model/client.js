const mongoose= require("mongoose")
const express= require("express")

const schema= mongoose.Schema

const projectschildrenSchema= new schema({
    project: String
})

const clientSchema= new schema({
    name: {
        type: String,
        require: true
    },
    email: {    
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    skills: {
        type: String,
        require: true
    },
    projects:{
        type: [projectschildrenSchema],
        default: []
    } 
    
}
)

module.exports= mongoose.model('Client', clientSchema)