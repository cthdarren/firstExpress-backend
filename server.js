const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5002

app.use(bodyParser.urlencoded({extended: true}))
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req,res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});

app.post('/quotes', (req,res) => {
    console.log(req.body)
})
});