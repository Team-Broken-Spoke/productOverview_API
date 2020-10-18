const csv = require('csvtojson')
const fs = require('fs');

//convert product (not used, decided to stay with the structure of the csv)
// let writeStream = fs.createWriteStream('../CSVS/productData.json');
// let readStream = fs.createReadStream('../CSVS/product.csv');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);

//convert features
// let writeStream = fs.createWriteStream('../featuresData.json');
// let readStream = fs.createReadStream('../features.csv');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);

//convert styles
// let writeStream = fs.createWriteStream('../stylesData.json');
// let readStream = fs.createReadStream('../styles.csv');
// readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);
//convert photos

//convert skus
let writeStream = fs.createWriteStream('../skusData.json');
let readStream = fs.createReadStream('../skus.csv');
readStream.pipe(csv({downstreamFormat: 'array'})).pipe(writeStream);