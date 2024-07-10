function longestWord(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");

    // Initialize variables to store the longest word and its length
    var longest = "";
    var maxLength = 0;

    // Iterate through each word in the array
    for (var i = 0; i < words.length; i++) {
        // Check if the current word is longer than the previous longest word
        if (words[i].length >= maxLength) {
            longest = words[i];
            maxLength = words[i].length;
        }
    }
  
  
  // Return the longest word
    return longest;
}
function shortestWord(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");

    // Initialize variables to store the shortest word and its length
    var shortest = words[0];
    var minLength = shortest.length;

    // Iterate through each word in the array
    for (var i = 1; i < words.length; i++) {
        // Check if the current word is shorter than the previous shortest word
        if (words[i].length <= minLength) {
            shortest = words[i];
            minLength = words[i].length;
        }
    }
  
  
    // Return the shortest word
    return shortest;
}
function wordLengths(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");

    // Initialize variable to store the sum of word lengths
    var sum = 0;

    // Iterate through each word in the array
    for (var i = 0; i < words.length; i++) {
        // Add the length of the current word to the sum
        sum += words[i].length;
    }
  // Return the sum of word lengths
    return sum;
}
var sentence = "The quick brown fox jumps over the lazy dog";
console.log(longestWord(sentence)); // Output: jumps
console.log(shortestWord(sentence)); // Output: fox
console.log(wordLengths(sentence)); // Output: 35
