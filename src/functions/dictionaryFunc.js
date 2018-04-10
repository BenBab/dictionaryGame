export function dictionaryGame(start, end, dict) {
    if (dict.length === 0) return 0;

    var wordQueue = [];
    var stepQueue = [];

    wordQueue.push(start);
    stepQueue.push(0);
    //debugger;

    var result = 100;
    while (wordQueue.length !== 0) {
      var currentWord = wordQueue.pop();
      var currentStep = stepQueue.pop();

      if (currentWord === end) {
        result = Math.min(result, currentStep);
      }
      //iterate for the length of the word, split the currentWord into an array and check each letter with a new letter
      for (var i = 0; i < currentWord.length; i++) {
        var currCharArr = currentWord.split("");
        //iterate over the alphabet, nextchar function goes to the next letter
        for (var letter = "a"; letter <= "z"; letter = nextChar(letter)) {
          currCharArr[i] = letter;
          var newWord = currCharArr.join("");
          //if the word exists push the word into the wordQueue
          if (dict.indexOf(newWord) !== -1) {
            //the wordQueue and stepQueue get updated, then at the beginning of the while-loop it gets popped and used as the next currentword/ currentStep
            wordQueue.push(newWord);
            stepQueue.push(currentStep + 1);
            //index checks the dict for the word, if it exists, then splice it out of the dict array
            var index = dict.indexOf(newWord);
            if (index > -1) {
              dict.splice(index, 1);
            }
          }
        }
      }
    }
    if (result === 100) {
      return "an undetermined amount of";
    } else {
      return result;
    }
  }
  

function nextChar(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 1);
}