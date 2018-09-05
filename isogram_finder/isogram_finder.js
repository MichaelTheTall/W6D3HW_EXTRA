const IsogramFinder = function (word) {
  this.word = word.split('');
}


IsogramFinder.prototype.isIsogram = function () {
  const object = {};
  const repeats = [];

  this.word.forEach(item => {
    if(!object[item])
    object[item] = 0;
    object[item] += 1;
  })

  for (const prop in object) {
    if(object[prop] >= 2) {
      repeats.push(prop);
    }
  }
  if (repeats.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = IsogramFinder;
