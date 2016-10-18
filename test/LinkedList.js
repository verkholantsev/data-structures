'use strict';

const assert = require('assert');

const LinkedList = require('../src/LinkedList');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = LinkedList.of([1, 2, 3]);
    });

    describe('pushFront()', () => {
        beforeEach(() => {
            list.pushFront(0);
        });

        it('должен добавлять элемент в начало списка', () => {
            assert(list.toString() === 'LinkedList [0, 1, 2, 3]');
        });
    });

    describe('topFront()', () => {
        it('должен возвращать первый элемент списка', () => {
            assert(list.topFront() === 1);
        });
    });

    describe('popFront()', () => {
        beforeEach(() => {
            list.popFront();
        });

        it('должен удалять первый элемент из списка', () => {
            assert(list.toString() === 'LinkedList [2, 3]');
        });
    });

    describe('pushBack()', () => {
        beforeEach(() => {
            list.pushBack(4);
        });

        it('должен добавлять элемент в конец списка', () => {
            assert(list.toString() === 'LinkedList [1, 2, 3, 4]');
        });
    });

    describe('topBack()', () => {
        it('должен возвращать последний элемент в списке', () => {
            assert(list.topBack() === 3);
        });
    });

    describe('popBack()', () => {
        beforeEach(() => {
            list.popBack();
        });

        it('должен удалять последний элемент из списка', () => {
            assert(list.toString() === 'LinkedList [1, 2]');
        });
    });

    describe('find(key)', () => {
        it('должен возвращать true, если элемент есть в списке', () => {
            assert(list.find(2) === true);
        });

        it('должен возвращать false, если элемента нет в списке', () => {
            assert(list.find(-1) === false);
        });
    });

    describe('erase(key)', () => {
        beforeEach(() => {
            list.erase(2);
        });

        it('должен удалять элемент со значением равным key', () => {
            assert(list.toString() === 'LinkedList [1, 3]');
        });
    });

    describe('empty()', () => {
        it('должен возвращать true, если список пуст', () => {
            assert(LinkedList.of([]).empty() === true);
        });

        it('должен возвращать false, если список имеет хотя бы один элемент', () => {
            assert(LinkedList.of([1]).empty() === false);
        });
    });

    describe('insert(index, key)', () => {
        beforeEach(() => {
            list.insert(0, 4);
            list.insert(2, 5);
            list.insert(4, 6);
        });

        it('должен вставлять элементы в список по индексу', () => {
            assert(list.toString() === 'LinkedList [4, 1, 5, 2, 6, 3]');
        });

    });

    describe('nthFromEnd(index)', () => {
        it('должен возвращть n-ный элемент с конца списка', () => {
            assert(list.nthFromEnd(0) === 3);
            assert(list.nthFromEnd(1) === 2);
            assert(list.nthFromEnd(2) === 1);
        });
    });

    describe('reverse()', () => {
        beforeEach(() => {
            list.reverse();
        });

        it('должен разварачивать список', () => {
            assert(list.toString() === 'LinkedList [3, 2, 1]');
        });
    });
});
