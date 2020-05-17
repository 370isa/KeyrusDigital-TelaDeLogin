const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

// Configurando os middlewares que serão utilizados do 'express'.
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

// Avisa o programa que ele dev buscar por arquivos com o final '.njk'.
server.set('view engine', 'njk')

// Idenfica a localização dos nunjucks.
nunjucks.configure('src/app/views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.listen(3000, function() {
  console.log('server is running')
})
