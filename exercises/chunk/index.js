// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chuncked = [];
//   for (let element of array){
//     const last = chuncked[chuncked.length - 1]
//     if(!last || last.length === size){
//       chuncked.push([element])
//     }else {
//       last.push(element)
//     }
//   }
//   return chuncked
// }


function chunk(array, size) {
  // create empty chuncked array
  const chuncked =[];
  //create index start at 0
  let index = 0;
  //while index is less than array.length
 while (index < array.length){
   //push a slice of length 'size' from 'array' into 'chuncked'
   chuncked.push(array.slice(index, index + size));
   //add 'size' to 'index'
   index += size
 }
 return chuncked
}
module.exports = chunk;
