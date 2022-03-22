const express = require('express')
const cors = require('cors')
const db = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.post('/api/insertVenue', (req, res) => {
  const name = req.body.name
  const city = req.body.city
  const county = req.body.county
  const address = req.body.address
  const phone = req.body.phone
  const imageLink = req.body.imageLink
  const description = req.body.description

  const sqlVenueInsert = "INSERT INTO venues (name, city, county, address, phone, imageLink, description) VALUES (?, ?, ?, ?, ?, ?, ?);"
  db.query(sqlVenueInsert, [name, city, county, address, phone, imageLink, description], (err, result) => {
    res.send(result)
  })
})

app.get('/api/getVenues', (req, res) => {
  const sqlSelect = "SELECT * FROM venues;"
  db.query(sqlSelect, (err, result) => {
    if (err) throw err
    res.send(result)
    console.log(result)
  })
})

app.delete('/api/deleteVenue/:id', (req, res) => {
  const id = req.params.id
  const sqlDelete = "DELETE FROM venues WHERE id = ?;"
  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

app.post('/api/insertArtist', (req, res) => {
  const name = req.body.name
  const city = req.body.city
  const county = req.body.county
  const genre = req.body.genre
  const phone = req.body.phone
  const websiteLink = req.body.websiteLink
  const instagramLink = req.body.instagramLink
  const imageLink = req.body.imageLink
  const description = req.body.description

  const sqlArtistInsert = "INSERT INTO artists (name, city, county, genre, phone, websiteLink, instagramLink, imageLink, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"
  db.query(sqlArtistInsert, [name, city, county, genre, phone, websiteLink, instagramLink, imageLink, description], (err, result) => {
    res.send(result)
  })
})

app.get('/api/getArtists', (req, res) => {
  const sqlSelect = "SELECT * FROM artists;"
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  })
})

app.delete('/api/deleteArtist/:id', (req, res) => {
  const id = req.params.id
  const sqlDelete = "DELETE FROM artists WHERE id = ?;"
  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err)
    res.send(result)
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})