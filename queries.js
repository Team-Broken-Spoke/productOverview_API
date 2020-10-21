// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017";
// const dbName = 'overview';
// let db;

// //connection
// MongoClient.connect(url, {useUnifiedTopology: true}, ( error, mongoclient ) => {
//   if (error) {
//     console.log('Connection error to mongodb:', error);
//   } else {
//     console.log('Connected to mongo database');
//     db = mongoclient.db(dbName);
//   }
// });

// //maybe need to fix the queries ??

// //querie to product to find the info for the provided productId
// const findProductInfo = (productId, cb) => {
//   db.collection('product').findOne({'id': productId}), function (error, results) {
//     if (error) {
//       cb(error, null);
//     } else {
//       cb(null, results)
//     }
//   };
// }

// //querie to feature to find the info for the provided productId
// const findFeatureInfo = () => {
//   db.collection('feature').findOne({'productId': productId}), function (error, results) {
//     if (error) {
//       cb(error, null);
//     } else {
//       cb(null, results);
//     }
//   };
// }

// //querie to photos to find the info for the provided productId
// const findPhotoInfo = () => {
//   db.collection('photos').findOne({'productId': productId}), function (error, results) {
//     if (error) {
//       cb(error, null);
//     } else {
//       cb(null, results);
//     }
//   };
// }

// //querie to skus to find the info for the provided productId
// const findSkuInfo = () => {
//   db.collection('skus').findOne({'productId': productId}), function (error, results) {
//     if (error) {
//       cb(error, null);
//     } else {
//       cb(null, results);
//     }
//   };
// }

// //querie to styles to find the info for the provided productId
// const findStyleInfo = () => {
//   db.collection('styles').findOne({'productId': productId}), function (error, results) {
//     if (error) {
//       cb(error, null);
//     } else {
//       cb(null, results);
//     }
//   };
// }

// module.exports = {
//   findProductInfo
// }