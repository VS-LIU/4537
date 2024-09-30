const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.use('/COMP4537/labs/0', express.static(path.join(__dirname, 'Lab0')))
app.use('/COMP4537/labs/1', express.static(path.join(__dirname, 'Lab1')))
app.use('/COMP4537/labs/3', express.static(path.join(__dirname, 'Lab3')))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})