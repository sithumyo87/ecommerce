require('dotenv').config();
const express = require('express'),
app = express(),
mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`);

app.use(express.json())

const permitRouter = require('./routes/permit');
const roleRouter = require('./routes/role')

app.use("/permit",permitRouter);
app.use("/role",roleRouter);
app.use((err,req,res,next)=>{
    // console.log(err.stack);
    err.status = err.status || 500;
    res.status(500).json({con:false,msg:err.message})
});


app.listen(process.env.PORT,console.log(`Server is running at Port ${process.env.PORT}`))