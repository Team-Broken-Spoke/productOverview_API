const express = require('express');
const app = express();
const port = 3003;
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});


let db;
MongoClient
  .connect(url, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('overview');
  })
  .catch(error => console.error(error));


  app.get('/product/:productId', (req, res) => {
    const collection = db.collection('product');
    collection.findOne({id: Number.parseInt(req.params.productId)})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.get('/styles/:productId', (req, res) => {
    const collection = db.collection('styles');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.get('/features/:productId', (req, res) => {
    const collection = db.collection('features');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.get('/skus/:styleId', (req, res) => {
    const collection = db.collection('skus');
    collection.findOne({productId: req.params.styleId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

  app.get('/photos/:productId', (req, res) => {
    const collection = db.collection('photos');
    collection.findOne({productId: req.params.productId})
      .then((response) => {
        res.send(response)
      })
      .catch(error => {
        console.error(error);
      })
  });

