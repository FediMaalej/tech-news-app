const { Sequelize, DataTypes } = require('sequelize')
const connection = new Sequelize(
 'tech_news_app',
 'root',
 'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// connection.sync({ alter: true }).then(() => {
//     console.log('Book table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

const Article = require('./Article.model')(connection, DataTypes)
const Category = require('./Category.model')(connection, DataTypes)
const Users = require('./Users.model')(connection, DataTypes)

Category.hasMany(Article)
Article.belongsTo(Category)

module.exports = { Article, Category, Users }