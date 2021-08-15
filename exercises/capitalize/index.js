// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //make an empty array
  const words = [];
  //split the input string by spaces
  
  //for each word in the array 
for (let word of str.split(' ')){
  //uppercase the first letter of each word
  //join first letter with rest of the string
  words.push(word[0].toUpperCase() + word.slice(1))
}
//push result into words array
//join 'words into a string and return
 return words.join(' ') 

}

module.exports = capitalize;
