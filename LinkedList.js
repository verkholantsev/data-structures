class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }

    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushFront(key) {
        const node = new ListNode(key);

        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.setNext(this.head);
        this.head = node;
    }

    topFront() {
        return this.head.key;
    }

    popFront() {
        this.head = this.head.next;
    }

    pushBack(key) {
        const node = new ListNode(key);
        this.tail.setNext(node);
        this.tail = node;
    }

    topBack() {
        return this.tail.key;
    }

    popBack() {
        let node = this.head;
        while (node.next !== this.tail) {
            console.log(node);
            node = node.next;
        }
        node.setNext(null);
        this.tail = node;
    }
}

const list = new LinkedList();

list.pushFront(1);
list.pushFront(2);
console.log(list.topFront()); // 2

list.popFront();
console.log(list.topFront()); // 1

list.pushBack(2);
console.log(list.topBack()); // 2

list.popBack();
console.log(list.topBack()); // 1
