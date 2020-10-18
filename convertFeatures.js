const fs = require('fs');
const readline = require('readline');


let writeStream = fs.createWriteStream('../featuresConvertedData.json');
let readStream = fs.createReadStream('../featuresData.json');


const featuresDetails = (feature) => {
  return {
    "id": feature.id,
    "feature": feature.feature,
    "value": feature.value
  }
}

let currentId = 1;
let featuresObj= {
  "productId" : 1,
  "features": []
}

const transform = (data) => {
  if (data.productId === currentId) {
    featuresObj["features"].push(featuresDetails(data));
  } else {
    writeStream.write(JSON.stringify(featuresObj));
    featuresObj = { "productId": data.productId, "features": [] };
    currentId = data.productId;
    featuresObj["features"].push(featuresDetails(data));
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