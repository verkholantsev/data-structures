'use strict';

class ArrayBasedQueue {
    /**
     * @constructor
     */
    constructor(length) {
        // Инициализация длины очереди.
        // В очереди, основанной на массиве, всегда должно быть
        // одно пустое место, чтобы разделять пустую очередь
        // и переполненную очередь.
        // O (1)
        this._length = length + 1;

        // Создание массива нужно длины O(1)
        this._array = new Array(this._length);

        // Инициализация индекса чтения из очереди O(1)
        this._readIndex = 0;

        // Инициализация индекса записи в очередь O(1)
        this._writeIndex = 0;
    }

    /**
     * Создание очереди из массива
     * @static
     */
    static of(length, array) {
        const queue = new ArrayBasedQueue(length);

        for (let i = 0; i < array.length; i++) {
            queue.enqueue(array[i]);
        }

        return queue;
    }

    /**
     * Добавление элемента в очередь O(1)
     * @param {*} key
     */
    enqueue(key) {
        // Если после добавления элемента индекс записи
        // окажется равен индексу чтения -- ошибка O(1)
        if (this._readIndex === (this._writeIndex + 1) % this._length) {
            throw new Error('Queue is full');
        }

        // Запись в массив по индексу O(1)
        this._array[this._writeIndex] = key;

        // Сдвиг индекса записи вправо с учетом того,
        // что он может выйти за пределы массива O(1)
        this._writeIndex = (this._writeIndex + 1) % this._length;
    }

    /**
     * Удаление и возврат элемента из очереди O(1)
     * @returns {*}
     */
    dequeue() {
        // Проверка очереди на пустоту O(1)
        if (this._readIndex === this._writeIndex) {
            throw new Error('Queue is empty');
        }

        // Чтение из массива по индексу O(1)
        const result = this._array[this._readIndex];

        // Сдвиг индекса чтения вправо с учетом того,
        // что он может выйти за пределы массива O(1)
        this._readIndex = (this._readIndex + 1) % this._length;

        // Возврат удаленного элемента O(1)
        return result;
    }

    /**
     * Проверка на пустоту O(1)
     * @returns {boolean}
     */
    empty() {
        // Проверка на равенство индексов записи и чтения O(1)
        return this._readIndex === this._writeIndex;
    }

    /**
     * @returns {string}
     */
    toString() {
        let result = [];
        let index = this._readIndex;
        while (index !== this._writeIndex) {
            result.push(this._array[index]);
            index++;
            index = index % this._length;
        }

        return `ArrayBasedQueue [${result.join(', ')}]`;
    }
}

module.exports = ArrayBasedQueue;
