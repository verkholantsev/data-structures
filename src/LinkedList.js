'use strict';

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
     * @param {*} key
     */
    pushFront(key) {
        // Создание нового элемента O(1)
        const newNode = new ListNode(key);

        // Если список пуст -- присваивание head и tail ссылки на новый элемент O(1)
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Выставление новому элементу указатель на текущий head O(1)
        newNode.setNext(this.head);

        // Присваивание head ссылки на новый элемент O(1)
        this.head = newNode;
    }

    /**
     * Получение первого элемента O(1)
     * @returns {*}
     */
    topFront() {
        // Если список пуст -- ошибка O(1)
        if (this.head === null) {
            throw new Error('List is empty');
        }

        // Возврат значения первого элмемента O(1)
        return this.head.key;
    }

    /**
     * Удаление первого элемента O(1)
     */
    popFront() {
        // Если список пуст -- ошибка O(1)
        if (this.head ===  null) {
            throw new Error('List is empty');

        // Если список состоит из одного элемнта -- сброс head и tail O(1)
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        // Присваивание в head ссылки на второй элемент O(1)
        this.head = this.head.next;
    }

    /**
     * Добавление элемента в конец O(1)
     */
    pushBack(key) {
        // Создание нового элемента O(1)
        const newNode = new ListNode(key);

        // Если список пуст -- присваивание head и tail ссылки на новый элемент O(1)
        if (this.tail === null && this.head === null) {
            this.tail = newNode;
            this.head = newNode;
            return;
        }

        // Добавление сслыки в текущий tail на новый элемент O(1)
        this.tail.setNext(newNode);

        // Присываивание в tail ссылки на новый элемент O(1)
        this.tail = newNode;
    }

    /**
     * Получение последнего элемента O(1)
     */
    topBack() {
        // Если список пуст -- ошибка O(1)
        if (this.tail === null) {
            throw new Error('List is empty');
        }

        // Возврат значения последнего элмемента O(1)
        return this.tail.key;
    }

    /**
     * Удаление последнего элемента O(n)
     */
    popBack() {
        // Если список пуст -- ошибка O(1)
        if (this.head === null) {
            throw new Error('List is empty');

        // Если список состоит из одного элемнта -- сброс head и tail O(1)
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        // Итерирование по списке до предпоследнего элемента O(n)
        let node = this.head;
        while (node.next !== this.tail) {
            node = node.next;
        }

        // Сброс указателя на последний элемент в предпоследнем O(1)
        node.setNext(null);

        // Присываивание в tail ссылки на предпоследний элемент O(1)
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

        return size;
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
        if (this.head === this.tail) {
            return;
        }

        this.tail = this.head;
        let node = this.head.next; // Итерирование со второго элемента
        let prev = this.head;

        while (node !== null) {
            if (node.next === null) {
                this.head = node;
            }
            var current = node;
            node = node.next; // Сначала на следующий элемент
            current.setNext(prev); // current -- текущий элемент
            prev = current;
        }

        this.tail.setNext(null);
    }
}

module.exports = LinkedList;
