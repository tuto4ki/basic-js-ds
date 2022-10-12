const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    if(this.head == null) {
      return this.head = new Node(data);
    }
    addNode(this.head, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      }
      else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  
  find(data) {
    return findValue(this.head, data);

    function findValue(node, data) {
      if(!node) {
        return null;
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        return findValue(node.left, data);
      }
      return findValue(node.right, data);
    }
  }

  has(data) {
    return hasValue(this.head, data);

    function hasValue(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      return data < node.data ? hasValue(node.left, data) : hasValue(node.right, data);
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } 
      else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } 
      else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.head) {
      return;
    }
    let node = this.head;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.head) {
      return;
    }
    let node = this.head;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};