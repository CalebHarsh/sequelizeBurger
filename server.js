var express = require("express")
var bodyParser = require("body-parser")
var db = require("./models")

var app = express();
var PORT = process.env.PORT || 3000;

//setup static files
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Handelbars Setup
var exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//routing
var apiRoutes = require("./routes/api_burger_routes.js")
var htmlRoutes = require("./routes/html_burger_routes.js")
app.use(apiRoutes)
app.use(htmlRoutes)
//Connect to port
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})
