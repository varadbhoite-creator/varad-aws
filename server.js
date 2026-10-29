const express = require('express')

const app = express()

const PORT = 3000

app.get('/getstudent',(req,res)=>{
    res.send('Student info')
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server running on ${PORT}`);
})