'use strict';

const {expect} = require('chai');
const ArrayBasedQueue = require('../src/ArrayBasedQueue');

describe('ArrayBasedQueue', () => {
    let queue;

    beforeEach(() => {
        queue = ArrayBasedQueue.of(5, [1, 2, 3]);
    });

    describe('enqueue(key)', () => {
        beforeEach(() => {
            queue.enqueue(4);
        });

        it('должен добавлять элемент в очередь', () => {
            expect(queue.toString()).to.be.eql('ArrayBasedQueue [1, 2, 3, 4]');
        });

        it('должен бросать ошибку, если очередь полна', () => {
            queue.enqueue(5);
            try {
                queue.enqueue(6);
            } catch (e) {
                expect(e.message).to.be.eql('Queue is full');
                return;
            }
            throw new Error('Не произошла ошибка при добавлении в полную очередь');
        });
    });

    describe('dequeue()', () => {
        let result;

        beforeEach(() => {
            result = queue.dequeue();
        });

        it('должен удалять элемент из очереди', () => {
            expect(queue.toString()).to.be.eql('ArrayBasedQueue [2, 3]');
        });

        it('должен возвращать удаленный из очереди элемент', () => {
            expect(result).to.be.eql(1);
        });

        it('должен бросать ошибку, если очередь пуста', () => {
            try {
                ArrayBasedQueue.of(5, []).dequeue();
            } catch (e) {
                expect(e.message).to.be.eql('Queue is empty');
                return;
            }
            throw new Error('Не произошла ошибка при добавлении в полную очередь');
        });
    });

    describe('empty()', () => {
        it('должен возвращать true для пустой очереди', () => {
            expect(ArrayBasedQueue.of(5, []).empty()).to.be.eql(true);
        });

        it('должен возвращать false для не пустой очереди', () => {
            expect(ArrayBasedQueue.of(5, [1]).empty()).to.be.eql(false);
        });
    });

    it('должна корректно работать при многократном (больше длины) добавлении и удалении элементов', () => {
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        expect(queue.toString()).to.be.eql('ArrayBasedQueue [4, 5, 6, 7]');
    });
});
