const mysql = require('mysql')


// const db = mysql.createPool({
//   host: 'eu-cdbr-west-01.cleardb.com',
//   user: 'b3107cf2ace282',
//   password: '581b70e0',
//   database: 'heroku_2d42dfabea9babd'
// })

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Password213.',
  database: 'headhunterDB'
})

module.exports = db