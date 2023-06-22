const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/CRUD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000, () => console.log('Example app listening on port 5000!'))
app.use(express.json())
