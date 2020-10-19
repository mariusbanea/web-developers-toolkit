class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    insert(key, value) {
      // If the tree is empty then this key is the root
      if (this.key === null) {
        this.key = key;
        this.value = value;
        /* If the tree already exists, then start at the root, 
          and compare it to the key you want to insert.
          If the new key is less than the node's key 
          then the new node needs to live in the left-hand branch */
      } else if (key < this.key) {
        /* If the existing node does not have a left child, 
            meaning that if the `left` pointer is empty, 
            then we can just instantiate and insert the new node 
            as the left child of that node, passing `this` as the parent */
        if (this.left === null) {
          this.left = new BinarySearchTree(key, value, this);
          /* If the node has an existing left child, 
            then we recursively call the `insert` method 
            so the node is added further down the tree */
        } else {
          this.left.insert(key, value);
        }
      }
      // Similarly, if the new key is greater than the node's key
      // then you do the same thing, but on the right-hand side
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        } else {
          this.right.insert(key, value);
        }
      }
    }
  
    find(key) {
      // If the item is found at the root then return that value
      if (this.key == key) {
        return this.value;
      } else if (key < this.key && this.left) {
      /* If the item you are looking for is less than the root 
          then follow the left child.
          If there is an existing left child, 
          then recursively check its left and/or right child
          until you find the item */
        return this.left.find(key);
      } else if (key > this.key && this.right) {
      /* If the item you are looking for is greater than the root 
          then follow the right child.
          If there is an existing right child, 
          then recursively check its left and/or right child
          until you find the item */
        return this.right.find(key);
      }
      // You have searched the tree and the item is not in the tree
      else {
        throw new Error("Key Error");
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        } else if (this.left) {
        /* If the node only has a left child, 
            then you replace the node with its left child */
          this._replaceWith(this.left);
        } else if (this.right) {
        /* And similarly if the node only has a right child 
            then you replace it with its right child */
          this._replaceWith(this.right);
        } else {
        /* If the node has no children then
            simply remove it and any references to it 
            by calling "this._replaceWith(null)" */
          this._replaceWith(null);
        }
      } else if (key < this.key && this.left) {
        this.left.remove(key);
      } else if (key > this.key && this.right) {
        this.right.remove(key);
      } else {
        throw new Error("Key Error");
      }
    }
  }
  
  module.exports = BinarySearchTree;