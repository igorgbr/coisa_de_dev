const Product = (sequelize, DataTypes) => {
  return sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    salary: DataTypes.FLOAT,
  });
};

module.exports = Product;
