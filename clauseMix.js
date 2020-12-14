let ClauseMix = {};
​
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};
function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};
function reverseString(string) {
  return string.split("").reverse().join("");
};
function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
   return words.join(" ");
};
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};
function replaceAllOccurrences (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};
function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};
​
function palindrome(str) {
  return `${str} ${reverseString(str)}`;
}
function pigLatin (sentence, character) {
  return sentence.split(' ').join(character + ' ');
}
// export default ClauseMix;
export{countCharacter, capitalizeFirstCharacterOfWords, reverseString, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin}