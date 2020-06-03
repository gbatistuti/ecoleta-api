import express from 'express'

const app = express();

app.get('/users', (req, res) => {
  console.log('Usuarios');

  res.json("Oi")

})

app.listen(3322)