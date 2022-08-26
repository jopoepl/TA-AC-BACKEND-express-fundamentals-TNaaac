var express = require(`express`)
var logger = require(`morgan`)

var app = express();

app.use(logger(`dev`))


app.use(express.static(__dirname + `/public`))
app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.get(`/new`, (req, res) => {
    res.sendFile(__dirname + `/form.html`)
})

app.post(`/new`, (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get(`/users/:username`, (req, res)=> {
    let username = req.params.username
    res.send(username)
})








app.listen(4000, () => {
    console.log(`listening on port 4K`)
})