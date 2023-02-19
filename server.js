import express from 'express'
const app = express()

// ports should be taken from env vars but hardcoded for simplicity
const port = 3000

app.get('/', async (_req, res) => {
  // http:// required
  // 127.0.0.1 works but localhost does not

  const pres = await fetch('http://127.0.0.1:5000/')
  res.send(await pres.text())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
