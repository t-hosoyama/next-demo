const express = require('express')
const next = require('next')
const argv = require('argv')

argv.option({
    name: 'port',
    short: 'p',
    type: 'integer',
    description: 'Listen server port. default:3000',
})

const args = argv.run()
const port = args.options.port || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
.prepare()
.then(() => {
      const server = express()
      server.get('*', (req, res) => {
          return handle(req, res)
      })

      server.listen(port, (err) => {
          if (err) {
            throw err
          }
          console.log(`> Ready on http://localhost:${port}`)
      })
})
.catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
})
