const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path= require('path')
const bodyParser = require('body-parser')


const app = express()
const port = 3001
app.use(cors())


const user= require('./routes/user')
app.use(user)

const projects= require('./routes/projects')
app.use(projects)

const query= require('./routes/query')
app.use(query)

const clientauth= require('./routes/client')
app.use(clientauth)

const { PSAV1Api, DataV1Api } = require('zeeve-zdfs-sdk');
const dataApi = new DataV1Api('https://app.zeeve.io/zdfs-api', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGZjNWQ2MjE5ZWY3ODdjODcwZmYxOTE3MDA4NTdmMTMxNTkyNzU5MDU3N2EzMyIsImFjY291bnRfaWQiOiJjNjA4MTY1NS1iMjY4LTRiYzItOWNjYi0zYWNhMTNjOTZkMDkiLCJhY2Nlc3Nfa2V5IjoiNjVkZmM1ZDYyMTllZjc4N2M4NzBmZjE5MTcwMDg1N2YxMzE1OTI3NTkwNTc3YTMzIiwiZW1haWwiOiJzY2hha3JhYm9ydHk4NDU1QGdtYWlsLmNvbSIsImlhdCI6MTY3NTUxMzYzMSwiZXhwIjoxOTkxMDg5NjMxfQ.twmvPDVxEfPyRYCRwZ1f5P_Msn5lSOes4n13J4Sa7C0');
app.post("/uploadzdfs", (req, res) => {
  const url1= req.body.url1
  const name= req.body.name
  const hash= dataApi.uploadFile(
    url1, name
  );
  console.log(hash)
  res.json({'hash': hash})
} 
)

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


