const express = require('express');
const cors = require('cors');
const { products, services, gallery } = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/gallery', (req, res) => {
  res.json(gallery);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.use('/images', express.static('public/images'));

