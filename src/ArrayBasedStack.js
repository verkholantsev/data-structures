'use strict';

class ArrayBasedStack {
    /**
     * @constructor
     */
    constructor(length) {
        // Сохранение длины стека
        this._length = length;

        // Создание массива необходимой длины
        this._array = new Array(length);

        // Инициализация индекса последнего элемента
        this._lastElementIndex = -1;
    }

    /**
     * @param {array} array
     * @returns {ArrayBasedStack}
     */
    static of(length, array) {
        const stack = new ArrayBasedStack(length);
        for (let i = 0; i < array.length; i++) {
            stack.push(array[i]);
        }
        return stack;
    }

    /**
     * Добавление элемента в стек O(1)
     * @param {*} key
     */
    push(key) {
        // Если стек полон -- ошибка O(1)
        if (this._length === this._lastElementIndex + 1) {
            throw new Error('Stack is full');
        }

        // Добавление элемента в конец массива O(1)
        this._array[this._lastElementIndex + 1] = key;

        // Увеличение индекса последнего элемента O(1)
        this._lastElementIndex++;
    }

    /**
     * Возврат элемента из стека O(1)
     * @returns {*}
     */
    top() {
        // Возврат последнего элемента из массива O(1)
        return this._array[this._lastElementIndex];
    }

    /**
     * Удаление элемента из стека O(1)
     */
    pop() {
        // Уменьшение индекса последнего элемента O(1)
        this._lastElementIndex--;
    }

    /**
     * Проверка стека на пустоту O(1)
     * @returns {boolean}
     */
    empty() {
        // Проверка на равенство индекса последнего элемента -1 O(1)
        return this._lastElementIndex === -1;
    }

    /**
     * @returns {string}
     */
    toString() {
        const elements = this._array.slice(0, this._lastElementIndex + 1);
        return `ArrayBasedStack [${elements.join(', ')}]`;
    }
}

module.exports = ArrayBasedStack;
