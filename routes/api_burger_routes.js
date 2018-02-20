var express = require("express")
var db = require("../models")
var router = express.Router()

router.get("/api/burgers", (req, res) => {
  db.Burger.findAll({}).then(data => {
    res.json(data)
  })
})

router.post("/api/burgers", (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(result => {
    console.log("New Burger added", result)
    res.json(result)
  })
})

router.put("/api/burger/:id", (req, res) => {
 
  db.Burger.update({
    devoured: true
  },{
    where: {
      id: req.params.id
    }
  }).then(result => {
    console.log("Burger Devoured", result)
    res.end()
  })
})

module.exports = router