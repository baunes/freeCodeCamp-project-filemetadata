const express = require('express')
const cors = require('cors')

// require and use "multer"...

const app = express()

app.use(cors())
app.use('/public', express.static(`${process.cwd()}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`)
})

app.get('/hello', (req, res) => {
  res.json({ greetings: 'Hello, API' })
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
