const express = require('express')
const Router = express.Router()
const { createArticle, readArticle, updateArticle, deleteArticle, deleteAllArticle } = require('../controllers/Article.controller')

Router.get('/getAllArticle', readArticle);
Router.post('/addArticle', createArticle);
Router.put('/updateArticle/:id', updateArticle);
Router.delete('/deleteArticle/:id', deleteArticle);
Router.delete("/deleteArticle", deleteAllArticle)

module.exports = Router