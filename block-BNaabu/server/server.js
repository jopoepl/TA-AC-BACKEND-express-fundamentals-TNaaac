var express = require(`express`)

var app = express()

app.get(`/`, (req, res) => {
    res.send(`Welcome to Homepage`)
})

app.use((req, res, next) => {
    console.log(req.url, `url`)
    if(req.url === "/admin") {
        next(`Unauthorized access`)
    } else {
        next()
    }
    
})

app.get(`/about`, (req, res) => {
    res.send(`Welcome to About Page`)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send(err)
})

app.listen(3000, ()=> {
    console.log(`server listening on port 3K`)
})