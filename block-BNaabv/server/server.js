var express = require(`express`)

var app = express();

var logger = require(`morgan`);
var cookieParser = require("cookie-parser");





//Question5

app.use(logger(`dev`))
app.use(cookieParser())

app.use((req, res, next) => {
    res.cookie("visits", 1);
    next()
})

//Question4

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post(`/form`, (req, res) => {
    res.json(req.body)
})

app.post(`/json`, (req, res) => {
    res.send(req.body)
})

app.use((req, res, next) => {
    if(req.url === `/admin`){
        next("504 - Unauthorized")
    }
    next()
})




//Question3

app.get(`/`, (req, res) => {
    res.send(`<h2>Welcome to Express</h2>`)
})

app.get(`/about`, (req, res) => {
    res.send(`My name is qwerty`)
})

//Question6
app.get(`/users/:username`, (req, res) => {
    let username = req.params.username;
    res.send(`<h3>${username}</h3>`)
})


//Question6 


app.use((req, res, next) => {
    res.send(`Page Not Found`)
})

app.use((err, req, res, next) => {
    res.send(err)
})


app.listen(3000, () => {
    console.log(`listening on port 3K`)
})