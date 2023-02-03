const mongoose= require("mongoose")
const express= require("express")

const schema= mongoose.Schema

const projectSchema= new schema({
    projectname: {
        type: String,
        require: true
    },
    projectdesc: {
        type: String,
        require: true
    },
    rate: {
        type: String,
        require: true
    },
    skills:{
        type: String,
        require: true
    },
}
)

module.exports= mongoose.model('Projects', projectSchema)