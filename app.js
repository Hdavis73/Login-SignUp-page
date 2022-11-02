// const http = require('http')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.listen(4000)

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index')
})