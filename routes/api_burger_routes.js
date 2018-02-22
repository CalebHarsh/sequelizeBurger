var express = require("express")
var db = require("../models")
var router = express.Router()

router.get("/api/burgers", (req, res) => {
  db.Burger.findAll({}).then(data => {
    res.json(data)
  })
})

router.get("/api/customers", (req, res) => {
  db.Customer.findAll({}).then(data => {
    res.json(data)
  })
})

router.post("/api/burgers", (req, res) => {
  console.log(req.body)
  db.Burger.create({
    burger_name: req.body.burger_name,
    burger_img: req.body.burger_img
  }).then(result => {
    console.log(result.id)
    res.json(result)
  })
})

router.put("/api/burger/:id", (req, res) => {
  db.Burger.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(
      db.Customer.create({
      customer_name: req.body.customer_name,
      BurgerId: req.body.BurgerId
    })
    ).then(result => {
      res.sendStatus('200')
    })
})

module.exports = router