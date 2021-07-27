const express = require('express')
const cors = require('cors')

const employees = require('./users/route')
const workers = require('./planning/workers.route')
const cities = require('./planning/cities.route')
const sites = require('./planning/sites.route')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/employees', employees)
app.use('/api/workers', workers)
app.use('/api/cities', cities)
app.use('/api/sites', sites)
app.get('/', cors(), (req, res) => res.send('hello!'))

module.exports = app
