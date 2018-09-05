const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  let result = this.words.map(w=>w.toUpperCase());
  return result;
}

module.exports = UpperCaser;
