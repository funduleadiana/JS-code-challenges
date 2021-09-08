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
  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst(){
    return this.head; 
  }
  getLast(){
    if(!this.head){
      return null; 
    }

    let node = this.head;
    while(node){
      if(!node.next){
        return node;
      }
      node = node.next; 
    }
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;

  }
  removeLast(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next){
        previous = node;
        node = node.next;

    }
    previous.next = null;
    
  }
  insertLast(data){
    const node = this.getLast();

    if(node){
      node.next = new Node(data)
    }else{
      this.head = new Node(data); 
    }
  }
  getAt(index){
    
    let counter;
    let node = this.head;
    while (node) {
      if(counter === index){
        return node;
      }
      counter++; 
      node =  node.next;
    }
    return null; 
  }

  removeAt(index){
    if(!this.head){
      return;
    }
    //if the index is 0 it returns the node at index 1 as the first node
    if(index === 0){
      this.head = this.head.next;
      return;
    }

    //reusing getAt to attempt to find the previous node
    const previous = this.getAt(index - 1);
    //asking for an index that was out of the bounds of our linked list
    if(!previous || !previous.next){
      return;
    }
    previous.next = previous.next.next;


  }
}
// real usage of the linkedList
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
