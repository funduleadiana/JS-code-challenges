// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const newstr = str.split('').reverse().join('')
//   return newstr;
// }

// function reverse(str){
//   let reversed ='';
//   for (let i of str){
//     reversed = i + reversed
//   }
//   return reversed
// }

function reverse(str){
  return arr = str.split('').reduce((reversed, character)=>{
   return character + reversed
 }, '')
}

module.exports = reverse;
