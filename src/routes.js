const express = require('express')
const routes = express.Router()
const login = require('./app/controlers/login')

// Configura o destino das rotas.
routes.get('/', login.index)
routes.post('/', login.post)

module.exports = routes
