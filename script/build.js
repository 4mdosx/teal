const execa = require('execa');

!(async () => {
  try {
    await execa('npx', ['webpack', '--config', './script/build-config/webpack.config.js']).stdout.pipe(process.stdout)
    console.info('ok')
  } catch (error) {
    console.error(error)
  }
})()