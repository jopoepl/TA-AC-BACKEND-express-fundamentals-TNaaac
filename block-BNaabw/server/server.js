var express = require(`express`)
var logger = require(`morgan`)
var cookieParser = require(`cookie-parser`)

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname))
app.use(cookieParser())
app.use(logger(`dev`))


app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.get(`/blog`, (req, res) => {
    res.sendFile(__dirname + `/blog.html`)
})

app.get(`/contact`, (req, res) => {
    res.sendFile(__dirname + `/contact.html`)
})

app.get(`/cases`, (req, res) => {
    res.sendFile(__dirname + `/cases.html`)
})

app.get(`/about`, (req, res) => {
    res.sendFile(__dirname + `/about.html`)
})

app.get(`/services`, (req, res) => {
    res.sendFile(__dirname + `/services.html`)
})

app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})