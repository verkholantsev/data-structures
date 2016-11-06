'use strict';

const {expect} = require('chai');
const BinarySearchTree = require('../src/BinarySearchTree');

describe.only('BinarySearchTree', () => {
    let tree;

    beforeEach(() => {
        tree = new BinarySearchTree();
    });

    describe('insert(key)', () => {
        it('должен корректно вставлять значение в дерево', () => {
            tree.insert(10);
            expect(tree.find(10)).to.be.eql(true);

            tree.insert(20);
            expect(tree.find(20)).to.be.eql(true);

            tree.insert(0);
            expect(tree.find(0)).to.be.eql(true);
        });
    });
});
