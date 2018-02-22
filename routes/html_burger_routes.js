var express = require("express")
var db = require("../models")
var router = express.Router()

router.get("/", (req, res) => {
  db.Burger.findAll({
    include: [db.Customer],
    order: [ 
      ["burger_name", "ASC"]
    ]
  }).then(data => {
    console.log(data)
    res.render("index", {
      orders: data
    })
  })
})

router.get("/:id", (req, res) => {
  var id = req.params.id
  db.Burger.findAll({
    include: [db.Customer],
    order: [
      ["burger_name", "ASC"]
    ]
  }).then(data => {
    db.Burger.findOne({
      where: {
        id: id
      }
    }).then(result => {
      res.render("order", {
        orders: data,
        customer: result
      })
    })
  })
})

module.exports = router