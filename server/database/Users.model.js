module.exports = (connection, Datatype) => {
    const Users = connection.define("users",{
      username: {
        type: Datatype.STRING(45),
        allowNull: false,
      },
      email: {
        type: Datatype.STRING,
        allowNull: false,
      },
      password: {
        type: Datatype.STRING(45),
        allowNull: false,
      }
    })
    return Users
}