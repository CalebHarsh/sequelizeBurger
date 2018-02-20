var express = require("express")
var db = require("../models")
var router = express.Router()

router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router