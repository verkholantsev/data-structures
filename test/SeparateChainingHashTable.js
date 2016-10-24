'use strict';

const {expect} = require('chai');
const SeparateChainingHashTable = require('../src/SeparateChainingHashTable');

describe('SeparateChainingHashTable', () => {
    let table;

    beforeEach(() => {
        table = new SeparateChainingHashTable(5);
        table.add(1);
    });

    describe('add(key)', () => {
        beforeEach(() => {
            table.add(12);
        });

        it('должен добавлять элемент в таблицу', () => {
            expect(table.toString()).to.be.eql('SeparateChainingHashTable {1: 1, 12: 12}');
        });
    });

    describe('find(key)', () => {
        it('должен возвращать true, если элемент есть в хеш-таблице', () => {
            expect(table.find(1)).to.be.eql(true);
        });

        it('должен возвращать false, если элемента нет в хеш-таблице', () => {
            expect(table.find(11)).to.be.eql(false);
        });
    });

    describe('remove(key)', () => {
        beforeEach(() => {
            table.remove(1);
        });

        it('должен удалять элемент из хеш-таблицы', () => {
            expect(table.toString()).to.be.eql('SeparateChainingHashTable {1: 1, 12: 12, 7: 7}');
    });

    it('должен корректно добавлять элемент в случае коллизии', () => {
        table.add(12);
        table.add(7);
        expect(table.toString()).to.be.eql('SeparateChainingHashTable {1: 1, 12: 12, 7: 7}');
    });
});
