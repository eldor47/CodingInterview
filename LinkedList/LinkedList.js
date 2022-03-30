class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    print() {
        let node = this.head
        var str = ''
        while (node) {
            if(node.next == null){
                str += node.data
                return str
            }
            str += (node.data + '->')
            node = node.next
        }
    }
}

class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous = null,
        tmp = null;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
        // reverse pointer
        node.next = previous;
        // step forward in the list
        previous = node;
        node = tmp;
    }
    return previous;
}

// O(n) time & O(n) space
function reverseRecursion(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverseRecursion(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}

function compareLists(head1, head2) {
    while(head1 && head2) {
        if(head1.data !== head2.data) {
            return 0
        }
        head1 = head1.next
        head2 = head2.next

        if(!head1 != !head2) {
            return 0
        }
    }

    return 1
}

function mergeLists(head1, head2) {
    var dummy = new ListNode(0)
    let newHead = dummy
    while(true) {

        if(head1 == null){
            newHead.next = head2
            break;
        }
        if(head2 == null){
            newHead.next = head1
            break;
        }

        if(head1.data <= head2.data) {
            newHead.next = head1
            head1 = head1.next
        } else {
            newHead.next = head2
            head2 = head2.next
        }

        newHead = newHead.next
    }

    return dummy.next
}

function createListFromArray(inputs) {
    let head = null
    var tmp = null
    for(let i = 0; i < inputs.length; i++){
        if(i == 0){
            head = new ListNode(inputs[i])
            tmp = head
        }
        else {
            let node = new ListNode(inputs[i])
            tmp.next = node
            tmp = node
        }
    }
    return new LinkedList(head)
}




/** Setup Nodes in List */
var inputs = [1, 2, 3]
var inputs2 = [1,2,5,6]

let list = createListFromArray(inputs)
reverseRecursion(list.head)

