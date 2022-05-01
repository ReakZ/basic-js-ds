const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstElement = null;
  }
  getUnderlyingList() {
    return this.firstElement;
  }

  enqueue(value) {
    if (!this.firstElement) {
      this.firstElement = new ListNode(value);
    } else {
      let current = this.firstElement;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.firstElement) {
      let result = this.firstElement.value;
      this.firstElement = this.firstElement.next;
      return result;
    } else {
      return null;
    }
  }
}

module.exports = {
  Queue,
};

// let a=new Queue
// a.enqueue(1)
// a.enqueue(3)
// a.enqueue(5)
// console.log(a.dequeue());
// console.log(a.dequeue());
// console.log(a.getUnderlyingList())
