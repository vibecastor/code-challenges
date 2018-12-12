'use strict';

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addVal(data) {
    this.head = new Node(data, this.head);
  }

  kthLast(k) {
    let slow = this.head;
    let fast = this.head;

    while (k > 0) {
      fast = fast.next;
      k--;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow.data;
  }

  partition() {
    let slow = this.head;

    while (slow.next) {
      if (slow.next.data % 2 !== 0) {
        const temp = slow.next;
        slow.next = slow.next.next;
        temp.next = this.head;
        this.head = temp;
      } else {
        slow = slow.next;
      }
    }
  }

  reverse() {
    let current = this.head;
    let next;
    let previous;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

module.exports = { Node, LinkedList };
