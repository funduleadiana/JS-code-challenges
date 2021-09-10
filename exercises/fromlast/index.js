// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  //size - n => getAt(on the result )
      //if n = 0 => 0 spaces from the last element is the last element
      //slow/fast strategy 
      let slow = list.head;
      let fast = list.head;
      while (n > 0){
        fast = fast.next;
        n--;
      }
      //initialise as this.head; fast will move to the position indicated by the integer n 
      //is fast pointing at the last elemn in the list if no move forward
      while(fast.next){
        slow = slow.next;
        fast = fast.next;

      }
      //is it pointing at the last elemn if yes slow must be n elements behind it
      return slow;
      
}

module.exports = fromLast;
