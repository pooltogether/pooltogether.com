const chalk = require('chalk')
const express = require('express')
const next = require('next')

// const i18next = require('./i18n/server')
// const nextI18NextMiddleware = require('next-i18next/middleware').default
// const NextI18Next = require('next-i18next').default
// const nextI18NextOptions = require('./lib/nextI18NextOptions').nextI18NextOptions
// const nextI18next = new NextI18Next(nextI18NextOptions)

var os = require('os')
var ifaces = os.networkInterfaces()
var ip = ''

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
      ip = `${alias} ${iface.address}`
    } else {
      // this interface has only one ipv4 adress
      // console.log(ifname, iface.address);
      ip = iface.address
    }
    ++alias
  })
})

const devProxy = {
  '/.netlify': {
    target: 'http://localhost:9000',
    pathRewrite: { '^/.netlify/functions': '' }
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV || 'development'
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
})

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(async () => {
    server = express()

    // Set up the proxy for Netlify lambda functions
    if (dev && devProxy) {
      // const proxyMiddleware = require("http-proxy-middleware")
      const { createProxyMiddleware } = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }

    // await i18next.initPromise
    // server.use(nextI18NextMiddleware(i18next))

    // server.use(nextI18NextMiddleware(nextI18next))

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(chalk.yellow(`> Ready on http://${ip}:${port} [${env}]`))
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
