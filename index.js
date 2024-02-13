const express = require('express');

const app = express()


app.get('/', (req, res) => {

  res.send('hello world')
})

console.log('hoge')

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

  console.log('lisen port', PORT)
})