const express = require('express')
const Router = express.Router()
const { createCategory, readCategory, updateCategory, deleteCategory } = require('../controllers/Category.controller')

Router.get('/getAllCategory', readCategory);
Router.post('/addCategory', createCategory);
Router.put('/updateCategory/:id', updateCategory);
Router.delete('/deleteCategory/:id', deleteCategory);

module.exports = Router