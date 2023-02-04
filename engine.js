const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 3000
app.use(cors())
const homepage= require('./routes/home')
app.use(homepage)

const user= require('./routes/user')
app.use(user)

const projects= require('./routes/projects')
app.use(projects)

const query= require('./routes/query')
app.use(query)

const clientauth= require('./routes/client')
app.use(clientauth)

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Koffee:KoffeeKoders%4015_16@cluster0.jss4yda.mongodb.net/binaryHire').then(
  result=>{
    app.listen(3005);
  }
).catch(err =>{
  console.log(err)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


