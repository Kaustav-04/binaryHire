const mongoose= require("mongoose")
const express= require("express")

const schema= mongoose.Schema

const projectSchema= new schema({
    projectdetails: {
        type: schema.Types.Mixed,
        require: true
    },
    email:{
        type: String,
        require: true
    },
}
)

module.exports= mongoose.model('Projects', projectSchema)