const express = require('express');

const app = express();

app.use(express.static('public'))
app.get('/home', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
})


app.use(express.static('public'))
app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})


app.use(express.static('public'))
app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html')
})


app.use(express.static('public'))
app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html')
})


app.listen(3000, () => console.log('App running'))