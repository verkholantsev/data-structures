'use strict';

class BinaryTreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    find(key, tree = this._root) {
        // Если дерево пусто, то элемента со значением key
        // в нем нет -- возвращаем false
        if (!tree) {
            return false;
        }

        // Если значение текущего элемента равно искомому,
        // возвращаем true
        if (tree.key === key) {
            return true;
        }

        // Если искомое значение меньше значения в текущем узле,
        // ищем в левом поддереве. Иначе -- в правом.
        if (key < tree.key) {
            return this.find(key, tree.left);
        } else {
            return this.find(key, tree.right);
        }
    }

    insert(key, tree = this._root) {
        // Если дерево пусто, создаем корневой элемент
        if (!this._root) {
            this._root = new BinaryTreeNode(key);
            return;
        }

        if (key < tree.key) {
            // Если значение для вставки меньше значения текущего узла,
            // продолжаем итерации влево
            if (tree.left) {
                this.insert(key, tree.left);

            // Если левого поддерева нет, то создаем новый узел
            // и заканчиваем итерации
            } else {
                tree.setLeft(new BinaryTreeNode(key));
            }
        } else {
            // Если значение для вставки больше значения текущего узла,
            // продолжаем итерации вправо
            if (tree.right) {
                this.insert(key, tree.right);

            // Если правого поддерева нет, то создаем новый узел
            // и заканчиваем итерации
            } else {
                tree.setRight(new BinaryTreeNode(key));
            }
        }
    }
}

module.exports = BinarySearchTree;
