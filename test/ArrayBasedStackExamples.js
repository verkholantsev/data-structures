'use strict';

const {expect} = require('chai');
const {isBalanced} = require('../src/ArrayBasedStackExamples');

describe('isBalanced', () => {
    it('должен возвращать true, если последовательность скобок сбалансированна', () => {
        expect(isBalanced('(([]()))'))
            .to.be.eql(true);
    });

    it('должен возвращать false, если последовательность скобок не сбалансированна', () => {
        expect(isBalanced('((]))'))
            .to.be.eql(false);

        expect(isBalanced(']'))
            .to.be.eql(false);

        expect(isBalanced('[]]'))
            .to.be.eql(false);
    });
});
