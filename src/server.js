const express = require('express')
const cors = require('cors')
const multer = require('multer')
const { extractMetadata } = require('./service')

const upload = multer()

const app = express()

app.use(cors())
app.use('/public', express.static(`${process.cwd()}/public`))

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`)
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
  res.json(extractMetadata(req.file))
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
