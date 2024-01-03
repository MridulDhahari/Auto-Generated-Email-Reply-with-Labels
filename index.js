const express = require('express');
const app= express();
require('dotenv').config();

//Import the email chevking and routes module
const emailCheck = require("./emailCheck");
const routes = require("./routes");

emailCheck.startEmailChecking();

//use the routes
app.use("/",routes);
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on the port ${process.env.PORT}`)
})




























