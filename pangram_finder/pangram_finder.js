const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
if (this.phrase.length <= 0) {
  return false;
}

// console.log(this.phrase.length);
// console.log(this.phrase);

for( var i = this.phrase.length-1; i>=0, i--;){
 if ( this.phrase[i] === ' ') this.phrase.splice(i, 1);
// console.log(i);
 }

const check = (currentValue) => {
  // console.log(this.alphabet);
  return this.phrase.includes(currentValue);
};


  let result = this.alphabet.every(check);
  return result;
}

module.exports = PangramFinder;
