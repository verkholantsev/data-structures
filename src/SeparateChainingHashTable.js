'use strict';

const LinkedList = require('./LinkedList');

class SeparateChainingHashTable {
    constructor(length) {
        this._length = length;

        this._array = new Array(length);
    }

    /**
     * Хеш-функция K mod N -- O(1)
     * @private
     * @returns {number}
     */
    _hashFn(key) {
        // Вычисление остатка от деления на длину O(1)
        return key % this._length;
    }

    /**
     * Добавление элемента в хеш-таблицу O(1)
     * @param {number} key
     * @param {*} value
     */
    add(key) {
        // Вычисление хеш-кода O(1)
        const hashCode = this._hashFn(key);

        // Доступ к списку по индексу, либо создание нового O(1)
        this._array[hashCode] = this._array[hashCode] || new LinkedList();
        // Добавление элемента в конец списка O(1)
        this._array[hashCode].pushBack(key);
    }

    /**
     * Поиск элемента по ключу
     * В лучшем случае -- O(1)
     * В худшем случае -- O(n)
     * @returns {boolean}
     */
    find(key) {
        // Вычисление хеш-кода O(1)
        const hashCode = this._hashFn(key);

        // Доступ к списку по индексу O(1)
        const list = this._array[hashCode];

        // Если списка нет -- возврат false O(1)
        if (!list) {
            return false;
        }

        // Поиск в списке по ключу
        // В лучшем случае -- O(1)
        // В худшем случае -- O(n)
        return list.find(key);
    }

    /**
     * Удаление элемента по ключу
     * В лучшем случае -- O(1)
     * В худшем случае -- O(n)
     */
    remove(key) {
        // Вычисление хеш-кода O(1)
        const hashCode = this._hashFn(key);

        // Доступ к списку по индексу O(1)
        const list = this._array[hashCode];

        // Если списка нет -- ничего делать не надо O(1)
        if (!list) {
            return;
        }

        // Удаление из списка по ключу
        // В лучшем случае -- O(1)
        // В худшем случае -- O(n)
        list.erase(key);
    }

    /**
     * @returns {string}
     */
    toString() {
        let result = [];

        for (let i = 0; i < this._length; i++) {
            const list = this._array[i];

            if (list) {
                for (let j = 0, length = list.size(); j < length; j++) {
                    const key = list.nth(j);
                    result.push(`${key}: ${key}`);
                }
            }
        }

        return `SeparateChainingHashTable {${result.join(', ')}}`;
    }
}

module.exports = SeparateChainingHashTable;
