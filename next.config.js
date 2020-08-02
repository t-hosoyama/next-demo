const path = require("path")

module.exports = {
  publicRuntimeConfig: {
    buildTime: Date.now()
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        "/": __dirname,
        "~": path.join(__dirname, 'src')
      }
    }
    return config
  }
}
