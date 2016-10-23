'use strict';

const ArrayBasedStack = require('./ArrayBasedStack');

/**
 * Проверка последовательности скобок на сбалансированность O(n)
 * @param {string} sequence
 */
exports.isBalanced = function isBalanced(sequence) {
    const stack = new ArrayBasedStack(100);

    // Итерирование по последовательности O(n)
    for (let i = 0; i < sequence.length; i++) {
        const parenthesis = sequence[i];

        // Если текущая скобка открывающая -- добавление в стек O(1)
        if (parenthesis === '(' || parenthesis === '[') {
            stack.push(parenthesis);
        } else if (parenthesis === ')' || parenthesis === ']') {

            // Если текущая скобка закрывающая и стек пуст -- возврат false O(1)
            if (stack.empty()) {
                return false;

            // Если текущая скобок закрывающая и на вершине стека
            // находится соответствующая ей открывающая скобка -- удаление
            // открывающей скобки из стека O(1)
            } else if (parenthesis ===  ')' && stack.top() === '(') {
                stack.pop();
            } else if (parenthesis ===  ']' && stack.top() === '[') {
                stack.pop();

            // Во всех остальных случаях -- возврат false O(1)
            } else {
                return false;
            }
        }
    }

    // Если после итерирования по последовательности в стеке остались
    // скобки -- последовательность не сбалансированна. Иначе -- сбалансированна. O(1)
    return stack.empty();
};
