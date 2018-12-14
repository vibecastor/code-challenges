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
    this.tail = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  add(val) {
    // create the node
    let nn = new Node(val);
    // point next at the head
    nn.next = this.head;
    // point the head at the new node
    this.head = nn;
    // if there's only one node it's the head as well as the tail.
    if (this.head.next == null) {
      this.tail = this.head;
    }
  }

  clear() {
    this.head = null;
  }

  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.data);
      current = current.next;
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

class HashList {
  constructor(size) {
    this.bucketSize = size;
    this.buckets = [];
    for (let i = 0; i < this.bucketSize; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  findHash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash;
  }

  getBucket(key) {
    let index = this.findHash(key) % this.bucketSize;
    return this.buckets[index];
  }

  set(key, val) {
    let object = { key, val };
    this.getBucket(key).traverse((o) => {
      if (o.key === key) {
        o.val = object.val;
        object = null;
      }
    });
    if (object) {
      this.getBucket(key).add(object);
    }
  }

  get(key) {
    let object = {val: null};
    this.getBucket(key).traverse((o) =>
    { if (o.key === key) object = o; });
    return object.val;
  }
}
