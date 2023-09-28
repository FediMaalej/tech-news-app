module.exports = (connection, Datatype) => {
    const Category = connection.define("category",{
      categoryName: {
        type: Datatype.STRING(45),
        allowNull: false,
      }
    })
    return Category
}