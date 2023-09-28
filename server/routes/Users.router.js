const express = require('express')
const Router = express.Router()
const { createUser, readUser, updateUser, deleteUser } = require('../controllers/Users.controller')

Router.get('/getAllUser', readUser);
Router.post('/addUser', createUser);
Router.put('/updateUser/:id', updateUser);
Router.delete('/deleteUser/:id', deleteUser);

module.exports = Router