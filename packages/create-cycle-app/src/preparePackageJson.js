'use strict'
var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var installScripts = require('./installScripts')

module.exports = function preparePackageJson (appFolder, appName, flavor, verbose) {
  // Start creating the new app
  console.log(chalk.green('Creating a new Cycle.js app in ' + appFolder + '.'))
  console.log()

  // Write some package.json configuration
  var packageJson = {
    name: appName,
    version: '0.1.0',
    private: true
  }
  fs.writeFileSync(
    path.join(appFolder, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  )

  installScripts(appFolder, appName, flavor, verbose)
}