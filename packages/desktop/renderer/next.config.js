const fs = require('fs')
const path = require('path')
const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = withPlugins([
  [withLess, { lessLoaderOptions: { javascriptEnabled: true, modifyVars: themeVariables } }]
], {
  webpack: (config) => Object.assign(config, {
    target: 'electron-renderer'
  })
})
