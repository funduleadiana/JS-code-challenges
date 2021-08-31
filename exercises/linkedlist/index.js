// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
   
    this.head = new Node(data, this.head); //linking the nodes as first node
  }
}
// real usage of the linkedList
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
