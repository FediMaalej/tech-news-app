const express = require('express')
const app = express()
const cors = require('cors')
require('./database/connction')

const Article = require('./routes/Article.router')
const Category = require('./routes/Category.router')
const Users = require('./routes/Users.router')

app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};
app.use(cors(corsOptions));


app.use('/api/article', Article)
app.use('/api/category', Category)
app.use('/api/users', Users)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})