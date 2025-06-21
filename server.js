const express=require('express')
require('dotenv').config()
const connectToDB=require('./database/db')
const bookRouter =require('./routes/book-routes')
const app=express()


port=process.env.PORT || 3000
//connect to database
connectToDB()

//middleware
app.use(express.json())

//routers
app.use('/api/books',bookRouter)

app.listen(port,()=>{
    console.log(`server started successfully at port:${port}`)
})