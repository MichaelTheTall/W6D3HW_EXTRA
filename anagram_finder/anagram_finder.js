const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let checkword = this.word.toLowerCase().split('').sort().join('').trim();
  let result = [];

for (var i = 0; i < otherWords.length; i++) {
  let tempword = otherWords[i].toLowerCase().split('').sort().join('').trim();
  if (otherWords[i] === this.word) {

  } else if (tempword === checkword)
  result.push(otherWords[i]);
}
return result;
}

module.exports = AnagramFinder;
