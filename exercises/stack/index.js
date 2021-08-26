// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

//The stack is different from the queue becuase where the queue follows a first in first out rule the stack has a first in last out rule hence push and pop
class Stack {
  constructor(){
    this.data = [];
  }
  //first in last out 
  push(record){
    this.data.push(record);
  }
  pop(){
    return this.data.pop();
  }
  peek(){
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
