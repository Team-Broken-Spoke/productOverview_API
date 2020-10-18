const fs = require('fs');
const readline = require('readline');


let writeStream = fs.createWriteStream('../skusConvertedData.json');
let readStream = fs.createReadStream('../skusData.json');


const skusDetails = (sku) => {
  return {
    "id": sku.id,
    "size": sku.size,
    "quantity": sku.quantity
  }
}

let currentId = "1";
let skusObj= {
  "productId" : "1",
  "skus": []
}

const transform = (data) => {
  if (data.styleId === currentId) {
    skusObj["skus"].push(skusDetails(data));
  } else {
    writeStream.write(JSON.stringify(skusObj));
    skusObj = { "productId": data.styleId, "skus": [] };
    currentId = data.styleId;
    skusObj["skus"].push(skusDetails(data));
  }
}

// read data line-by-line
const readInterface = readline.createInterface({
  input: readStream
});

readInterface.on('line', (line) => {
  line = line.trim();

  if (line.charAt(line.length-1) === ',') {
      line = line.substr(0, line.length-1);
  }

  if (line.charAt(0) === '{') {
      transform(JSON.parse(line));
  }
});