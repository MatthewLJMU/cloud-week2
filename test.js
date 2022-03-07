const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
 res.send('Hello Virtual Machine!')
})

app.get('/Bollocks', (req, res) => {
    res.send('I HATE RYAN THORN')
})
app.listen(port, () => {
 console.log(`Express Application listening at port 3000`)
})