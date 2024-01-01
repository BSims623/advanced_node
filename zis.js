class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        var popped = this.tail;
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        this.length--;
        return popped
    }
    shift() {
        if (this.length === 0) return undefined;
        var shifted = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        return shifted
    }
    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        var i, currentNode;
        if (index < (this.length / 2)) {
            currentNode = this.head;
            i = 0;
            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }
        } else {
            currentNode = this.tail;
            i = this.length - 1;
            while (i > index) {
                currentNode = currentNode.prev;
                i--
            }
        }
        return currentNode
    }
    set(index, value) {
        var currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.val = value;
        return true
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;
        var newNode = new Node(value);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        this.length++
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var nextNode = removedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;

        return removedNode
    }
}

let double = new DoublyLinkedList();
let first = new Node(5)
double.unshift(2)
double.unshift(3)
double.unshift(4)
double.unshift(2)
double.unshift(3)
double.unshift(4)
double.unshift(4)
double.set(6, 92)
double.insert(1, 99)
double.insert(2, 77)




console.log(double.get(3));
console.log(double.remove(0));