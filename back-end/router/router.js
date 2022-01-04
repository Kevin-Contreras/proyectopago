var express = require("express")
const stripe = require('stripe')('sk_test_51KAk3VJ4LRGO4WGyBnTXbRgDyHsMMt0I92RMjSsmL2gdD6TfNodo7W9Mkt3cmyGApEtlaMamlo5JxLFqc0kax0yB001LjsCEqs');
var rutas =  express.Router()
rutas.get("/",function(req,res,next){
  
  res.render("index.html")
})

module.exports = rutas