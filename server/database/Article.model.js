module.exports = (connection, Datatype) => {
    const Article = connection.define("article",{
      title: {
        type: Datatype.STRING(45),
        allowNull: false,
      },
      content: {
        type: Datatype.STRING,
        allowNull: false,
      },
      image: {
        type: Datatype.STRING,
      }
    })
    return Article
}