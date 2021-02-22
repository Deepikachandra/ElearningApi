var express = require('express');
var router=express.Router();

router.get("/",function(req,res){
  setTimeout(myFunction, 7000)

  function myFunction() {
    res.send(200);
  }
})

module.exports=router;