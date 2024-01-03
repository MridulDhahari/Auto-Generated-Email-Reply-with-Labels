const express = require("express");
const router = express.Router();

//defining a route
router.get("/",(req,res)=>{
    res.send("Application is Running");
})

module.exports = router;