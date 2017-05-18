// this file is not transpiled, so no babel

require('babel-register') // make so requires are transpiled by babel

const express = require('express') // web server
const React = require('react')
const ReactDOMServer = require('react-dom/server') // render app to a string
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash') // for templating
const fs = require('fs')
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate) // templating function
const App = require('./js/App').default // App exports default, so to use it with CommonJS we need .default

const server = express() // start server

server.use('/public', express.static('./public')) // expose statics on /public

// request handler
server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext() // router v4 2-pass yadayada
   // render app to a string
  let body = ReactDOMServer.renderToString(
    // vanila react (no JSX)
    React.createElement(ServerRouter, {location: req.url, context: context},
      React.createElement(App)
    )
  )
  res.write(template({body: body}))
  res.end()
})

console.log('listening on ' + port)
server.listen(port)
