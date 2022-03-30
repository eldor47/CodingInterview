class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    addNode(n) {
        if(n.value < this.value) {
            if(this.left == null) {
                this.left = n
            } else {
                this.left.addNode(n)
            }
        } else if(n.value > this.value) {
            if(this.right == null) {
                this.right = n
            } else {
                this.right.addNode(n)
            }
        }
    }

    visitLeftOnly() {
        if (this.left != null) {
            this.left.visitLeftOnly()
        }
        console.log(this.value)
    }

    visitRightOnly() {
        if (this.right != null) {
            this.right.visitRightOnly()
        }
        console.log(this.value)
    }

    visitPre() {
        if (this.left != null) {
            this.left.visitPre()
        }
        console.log(this.value)
        if (this.right != null) {
            this.right.visitPre()
        }
    }

    visitPost() {
        if (this.right != null) {
            this.right.visitPost()
        }
        console.log(this.left.value)
        if (this.left != null) {
            this.left.visitPost()
        }
    }
    

    search(val) {
        if(this.value == val) {
            return this;
        } else if(val < this.value && this.left !== null) {
            return this.left.search(val)
        } else if(val > this.value && this.right !== null) {
            return this.right.search(val)
        }
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    addNode(val) {
        var node = new Node(val)
        if (this.root == null) {
            this.root = node
        } else {
            this.root.addNode(node)
        }
    }

    traverse() {
        //this.root.visitLeft();
        console.log('LEFT')
        this.root.visitLeftOnly();

        console.log('RIGHT')
        this.root.visitRightOnly();
    }

    search(val) {
        var found = this.root.search(val)
        return found
    }
}


var tree = new Tree()

tree.addNode(10)
tree.addNode(9)
tree.addNode(15)
tree.addNode(8)
tree.addNode(10)
tree.addNode(14)
tree.addNode(16)
// for(var i = 0; i < 10; i++) {
//     tree.addNode(Math.floor(Math.random() * 5000) + 1)
// }


console.log(tree)

tree.traverse()

//console.log(tree.search(20))
