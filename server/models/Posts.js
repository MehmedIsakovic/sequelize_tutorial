module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define(
    "Posts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Posts",
    }
  );

  Posts.assoicate = function (models) {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
      foreignKey: "post_id",
    });
  };

  return Posts;
};
