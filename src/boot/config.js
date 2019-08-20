const pkg = require('../../package')

export default {
  appname: pkg.name,
  expressPort: process.env.NODE_REQUESTPORT,
  meetApiUrl: process.env.MEET_API_URL
}
