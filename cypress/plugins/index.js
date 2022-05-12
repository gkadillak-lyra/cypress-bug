// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const webpackPreprocessor = require('@cypress/webpack-preprocessor')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = (on, config) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  }
  // require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', webpackPreprocessor(options))
  on('task', {
    log: message => {
      console.log(message)
      return null
    },
    table: message => {
      console.table(message)
      return null
    }
  })
  return config
}