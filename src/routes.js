const express = require('express')
const routes = express.Router()
const login = require('./app/controlers/login')

routes.get('/', login.index)
routes.post('/', login.post)

module.exports = routes
