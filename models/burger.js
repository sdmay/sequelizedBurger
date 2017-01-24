module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
   devoured: {
       type: DataTypes.BOOLEAN,
       defaultValue: false
   }
  });
      // We're saying that we want our Author to have Burgers
    //   classMethods: {
    //     associate: function(models) {
    //       // When we delete an Author, we'll also delete their Burgers "cascade"
    //       // An Author (foreignKey) is required or a Burger can't be made
    //       Burger.belongsTo(models.Eater,
    //         {
    //           onDelete: "cascade",
    //           foreignKey: {
    //             allowNull: false
    //           }
    //         });
    //     }
    //   }
  return Burger;
};