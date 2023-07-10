const mongoose = require('mongoose')
const URL = 'mongodb+srv://tamimasigma:resumebuilder@project1.gd44z0d.mongodb.net/resumebuilder'
mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})
