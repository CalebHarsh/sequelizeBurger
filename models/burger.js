
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    burger_img: {
      type: DataTypes.STRING,
      defaultValue: "assets/imgs/none.jpg"
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  Burger.associate = function (models) {
    models.Burger.hasOne(models.Customer, {
      onDelete: "cascade"
    })
  }

  return Burger
}