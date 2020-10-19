const fs = require('fs');
const readline = require('readline');


let writeStream = fs.createWriteStream('../photosConvertedData.json');
let readStream = fs.createReadStream('../photosData.json');


const photosDetails = (photo) => {
  return {
    "id": photo.id,
    "url": photo.url,
    "thumbnail_url": photo.thumbnail_url
  }
}

let currentId = "1";
let photosObj= {
  "productId" : "1",
  "photos": []
}

const transform = (data) => {
  if (data.styleId === currentId) {
    photosObj["photos"].push(photosDetails(data));
  } else {
    writeStream.write(JSON.stringify(photosObj));
    photosObj = { "productId": data.styleId, "photos": [] };
    currentId = data.styleId;
    photosObj["photos"].push(photosDetails(data));
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