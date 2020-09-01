function Entry() {
  this.words;

}

Entry.prototype.wordCount = function (words){
  this.words = words;
  let wordsArray = [];
  words.split(" ");
  for (let i = 0; i <= words.length; i++) {
    if (words!=" "){
      wordsArray.push(words[i]);
    }
    return wordsArray.length;
  }
};

Entry.prototype.vowelConsCount = function (words){
  this.words = words;
  let vowelCount = 0;
  let consCount = 0;
  for (let i=0; i <= words.length; i++) {
    words[i].test(/[aeiouAEIOU]/) ? vowelCount += 1 : consCount += 1;
  }
  return vowelCount, consCount;
};
  
