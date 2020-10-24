function randomId () {
  Math.floor(Math.random() * (1000000 - 1) + 500000);
}

module.exports = {
  randomId,
}