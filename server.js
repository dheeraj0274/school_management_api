import express from 'express'
import dotenv from 'dotenv'

import app from './app.js'

dotenv.config({path:'./config/.env'})


const Port = process.env.PORT || 8000
app.listen(Port , ()=>{
    console.log(`Server is runnign on the port ${Port}`)
})