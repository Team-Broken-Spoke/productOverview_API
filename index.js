const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3003;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + './'));

// TODO: server responses!!

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT} !!`);
});