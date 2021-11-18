const mysql = require('mysql')

// createPool
const db = mysql.createPool({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b3107cf2ace282',
  password: '581b70e0',
  database: 'heroku_2d42dfabea9babd'
})

module.exports = db