var express = require(`express`)

let app = express();

app.listen(5000, () => {
    console.log(`server listening on port 5K`)
})

app.get(`/`, (req, res) => {
    res.send(`Hello World`)
})