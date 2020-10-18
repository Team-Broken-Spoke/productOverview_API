const fs = require('fs');
const readline = require('readline');


let writeStream = fs.createWriteStream('../stylesConvertedData.json');
let readStream = fs.createReadStream('../stylesData.json');


const styleDetails = (style) => {
  return {
    "id": style.id,
    "name": style.name,
    "sale_price": style.sale_price,
    "original_price": style.original_price,
    "default_style": style.default_style
  }
}

let currentId = "1";
let stylesObj= {
  "productId" : "1",
  "styles": []
}

const transform = (data) => {
  if (data.productId === currentId) {
    stylesObj["styles"].push(styleDetails(data));
  } else {
    writeStream.write(JSON.stringify(stylesObj));
    stylesObj = { "productId": data.productId, "styles": [] };
    currentId = data.productId;
    stylesObj["styles"].push(styleDetails(data));
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