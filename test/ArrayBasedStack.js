'use strict';

const expect = require('chai').expect;
const ArrayBasedStack = require('../src/ArrayBasedStack');

describe('ArrayBasedStack', () => {
    let stack;

    beforeEach(() => {
        stack = ArrayBasedStack.of(5, [1, 2, 3]);
    });

    describe('push(key)', () => {
        beforeEach(() => {
            stack.push(4);
        });

        it('должен добавлять элемент в конец стека', () => {
            expect(stack.toString()).to.be.eql('ArrayBasedStack [1, 2, 3, 4]');
        });

        it('должен кидать ошибку, если стек полон', () => {
            stack.push(5);
            try {
                stack.push(6);
            } catch (e) {
                expect(e.message).to.be.eql('Stack is full');
                return;
            }

            throw new Error('Error was not thrown');
        });
    });

    describe('top()', () => {
        it('должен возвращать последний добавленный элемент из стека', () => {
            expect(stack.top()).to.be.eql(3);
        });
    });

    describe('pop()', () => {
        beforeEach(() => {
            stack.pop();
        });

        it('должен удалять элемент из стека', () => {
            expect(stack.toString()).to.be.eql('ArrayBasedStack [1, 2]');
        });
    });

    describe('empty()', () => {
        it('должен возвращать true для пустого стека', () => {
            expect(ArrayBasedStack.of(5, []).empty()).to.be.eql(true);
        });

        it('должен возвращать false для не пустого стека', () => {
            expect(ArrayBasedStack.of(5, [1]).empty()).to.be.eql(false);
        });
    });
});
