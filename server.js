import express from 'express'
const app = express()

// ports should be taken from env vars but hardcoded for simplicity
const port = 3000

app.get('/ask_python', async (_req, res) => {
  const pres = await fetch('http://localhost:5000/')
  res.send(await pres.text())
})

app.get('/', async(_req, res) => {
  res.send('hello from node server\n')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
