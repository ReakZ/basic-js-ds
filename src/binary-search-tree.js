const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree ? this.tree : null;
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
    } else {
      let currentNode = this.tree;
      let newNode = new Node(data);

      while (currentNode) {
        if (data > currentNode.data) {
          if (!currentNode.right) {
            break;
          }
          currentNode = currentNode.right;
        } else {
          if (!currentNode.left) {
            break;
          }
          currentNode = currentNode.left;
        }
      }

      if (data > currentNode.data) {
        currentNode.right = newNode;
      } else {
        currentNode.left = newNode;
      }
    }
  }
  has(data) {
    let currentNode = this.tree;

    while (currentNode) {
      if (data == currentNode.data) {
        return true;
      }

      if (data > currentNode.data) {
        if (!currentNode.right) {
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return false;
  }
  find(data) {
    let currentNode = this.tree;

    while (currentNode) {
      if (data == currentNode.data) {
        return currentNode;
      }

      if (data > currentNode.data) {
        if (!currentNode.right) {
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  remove(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let currentNode = this.tree;

    function removeRootNode(rootNode) {

        let maxNode = rootNode.left;
        while (maxNode && maxNode.right && maxNode.right.right) {
          maxNode = maxNode.right;
        }

        let temp = maxNode.right;
        temp.left = rootNode.left;
        temp.right = rootNode.right;
        maxNode.right = null;
        return temp;

    }
    function removeNodes(node) {
      if (!node.left && !node.right) {
        return null;
      } else if (node.left && node.right) {
        if (!node.right.left) {
          let temp = node.right;
          temp.left = node.left;
          return temp;
        } else {
          let minNode = node.right;

          while (minNode && minNode.left && minNode.left.left) {
            minNode = minNode.left;
          }

          let temp = minNode.left;
          temp.left = node.left;
          temp.right = node.right;
          minNode.left = null;
          return temp;
        }
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      }
    }
    if(data == this.tree.data){
      this.tree=removeRootNode(this.tree)
    }
    while (currentNode) {
      if (currentNode.left && data == currentNode.left.data) {
        currentNode.left = removeNodes(currentNode.left);
        return "left node benn delete";
      }

      if (currentNode.right && data == currentNode.right.data) {
        currentNode.right = removeNodes(currentNode.right);

        return "right node benn delete";
      }

      if (data > currentNode.data) {
        if (!currentNode.right) {
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  min() {
    if (!this.tree) {
      return null;
    }
    let minNode = this.tree;
    while (minNode && minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if (!this.tree) {
      return null;
    }
    let maxNode = this.tree;
    while (maxNode && maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};