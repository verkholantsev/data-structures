const assert = require('assert');

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
    /**
     * Конструктор связанного списка
     *
     * @constructor
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    static of(array) {
        const list = new LinkedList();
        for (let i = 0; i < array.length; i++) {
            list.pushBack(array[i]);
        }
        return list;
    }

    /**
     * Возвращает строковое представление списка
     * @returns {string}
     */
    toString() {
        let result = [];
        let node = this.head;

        while (node !== null) {
            result.push(node.key);
            node = node.next;
        }

        return `LinkedList [${result.join(', ')}]`;
    }

    /**
     * Добавление элемента в начало
     *
     * @param {*} key
     */
    pushFront(key) {
        const newNode = new ListNode(key);

        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.setNext(this.head);
        this.head = newNode;
    }

    /**
     * Получение первого элемента
     *
     * @returns {*}
     */
    topFront() {
        if (this.head === null) {
            throw new Error('List is empty');
        }

        return this.head.key;
    }

    /**
     * Удаление первого элемента
     */
    popFront() {
        if (this.head ===  null) {
            throw new Error('List is empty');
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        this.head = this.head.next;
    }

    /**
     * Добавление элемента в конец
     */
    pushBack(key) {
        const newNode = new ListNode(key);

        if (this.tail === null && this.head === null) {
            this.tail = newNode;
            this.head = newNode;
            return;
        }

        this.tail.setNext(newNode);
        this.tail = newNode;
    }

    /**
     * Получение последнего элемента
     */
    topBack() {
        if (this.tail === null) {
            throw new Error('List is empty');
        }

        return this.tail.key;
    }

    /**
     * Удаление последнего элемента
     */
    popBack() {
        if (this.head === null) {
            throw new Error('List is empty');
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        let node = this.head;
        while (node.next !== this.tail) {
            node = node.next;
        }
        node.setNext(null);
        this.tail = node;
    }

    /**
     * Поиск элемента в списке
     * @returns {boolean}
     */
    find(key) {
        let node = this.head;
        while (node !== null) {
            if (node.key === key) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    /**
     * Удаление элемента из списка по значению
     */
    erase(key) {
        let node = this.head;
        while (node !== null) {
            if (node.next !== null && node.next.key === key) {
                node.setNext(node.next.next);
                return;
            }
            node = node.next;
        }
    }

    /**
     * Проверка списка на пустоту
     * @returns {boolean}
     */
    empty() {
        return this.head === null;
    }

    /**
     * Получение длины списка
     * @returns {number}
     */
    size() {
        let size = 0;
        let node = this.head;
        while (node !== null) {
            size += 1;
        }
    }

    /**
     * Добавление элемента по индексу
     * @param {number} index
     * @param {*} key
     */
    insert(index, key) {
        if (index === 0) {
            this.pushFront(key);
            return;
        }

        const newNode = new ListNode(key);
        let node = this.head;
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }
        newNode.setNext(node.next);
        node.setNext(newNode);
    }

    /**
     * Поиск n-го элемента с конца
     * @param {number} index
     */
    nthFromEnd(index) {
        let offset = 0;
        let node = this.head;
        let resultNode = null;

        while (node !== null) {
            if (offset === index) {
                resultNode = this.head;
            } else if (resultNode !== null) {
                resultNode = resultNode.next;
            }
            node = node.next;
            offset++;
        }

        return resultNode.key;
    }

    /**
     * Разворот списка
     */
    reverse() {
    }
}

const l1 = LinkedList.of([1, 2, 3]);
l1.pushFront(0);
assert(l1.topFront() === 0, 'Первый элемент не равен 0');

const l2 = LinkedList.of([1, 2, 3]);
l2.popFront();
assert(l2.topFront() === 2, 'Первый элемент не равен 2');

const l3 = LinkedList.of([1, 2, 3]);
l3.pushBack(4);
assert(l3.topBack() === 4, 'Последний элемент не равен 4');

const l4 = LinkedList.of([1, 2, 3]);
l4.popBack();
assert(l4.topBack() === 2, 'Последний элемент не равен 2');

const l5 = LinkedList.of([1, 2, 3]);
assert(l5.find(2), 'Элемент 2 есть в списке');

const l6 = LinkedList.of([1, 2, 3]);
l6.erase(2);
assert(l6.toString() === 'LinkedList [1, 3]', 'Удаление не сработало корректно')

const l7 = new LinkedList();
assert(l7.empty(), 'Список не пуст');
l7.pushFront(1);
assert(l7.empty() === false, 'Список пуст');

const l8 = LinkedList.of([1, 2, 3]);
l8.insert(0, 4);
l8.insert(2, 5);
l8.insert(4, 6);
assert(l8.toString() === 'LinkedList [4, 1, 5, 2, 6, 3]', 'Вставка по индексу не сработала корректно')

const l9 = LinkedList.of([1, 2, 3]);
assert(l9.nthFromEnd(0) === 3, '0-й элемент с конца не равен 3');
assert(l9.nthFromEnd(1) === 2, '1-й элемент с конца не равен 2');
assert(l9.nthFromEnd(2) === 1, '2-й элемент с конца не равен 1');

const l10 = LinkedList.of([1, 2, 3]);
l10.reverse();
console.log(l10);
assert(l10.toString() === 'LinkedList [3, 2, 1]', 'Разворот списка не сработал');
