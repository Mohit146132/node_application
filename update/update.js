// import modules
const express = require("express")
let mongodb = require("mongodb")
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create post rest api
router.post("/",(req,res)=>{
    var p_id = req.body.p_id
    var p_name = req.body.p_name
    var p_cost = req.body.p_cost
    var obj = {
        "p_name" : p_name,
        "p_cost" : p_cost
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else{
            let db = conn.db("nodedb")
            db.collection("products").updateOne({"p_id":p_id},{$set:obj},(err,result)=>{
                if(err){
                    res.json({'Update':'failed'})
                }else{
                    console.log("Data Updated")
                    res.json({"Update":"success"})
                }
            })
        }    
    })
})
module.exports = router