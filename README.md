#Структуры данных

##TOC

##Связанные списки

Они же Linked Lists.

###Структура

```
+------+
| key  | ключ
+------+
| next | указатель на следующий элемент
+------+

HEAD
  |
  v
+---+       +---+       +---+
| 1 |  +--> | 2 |  +--> | 3 |
+---+  |    +---+  |    +---+
| -----+    | -----+    |   |
+---+       +---+       +---+
```

###Операции над связанными списками

1. Добавление в начало `pushFront(key)`
1. Возврат первого элемента `key topFront()`
1. Удаление первого элемента `popFront()`
1. Добавление в конец `pushBack(key)/append`
1. Возврат последнего элемента `key topBack()`
1. Удаление последнего элемента `popBack()`
1. Поиск элемента в списке `boolean find(key)`
1. Удаление элемента по значению `erase(key)`
1. Проверка на пустоту `boolean empty()`
1. Получение длины списка `size()`
1. Добавление по индексу `insert(index, key)`

###Реализации операций над списком

####pushFront(key)

```js
/**
 * Добавление элемента в начало O(1)
 * @param {*} key
 */
pushFront(key) {
    // Создание нового элемента O(1)
    const newNode = new ListNode(key);

    // Если список пуст -- присваивание head и tail ссылки на новый элемент O(1)
    if (this.head === null && this.tail === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
    }

    // Выставление новому элементу указатель на текущий head O(1)
    newNode.setNext(this.head);

    // Присваивание head ссылки на новый элемент O(1)
    this.head = newNode;
}
```

####key topFront()

```js
/**
 * Получение первого элемента O(1)
 * @returns {*}
 */
topFront() {
    // Если список пуст -- ошибка O(1)
    if (this.head === null) {
        throw new Error('List is empty');
    }

    // Возврат значения первого элмемента O(1)
    return this.head.key;
}
```

####popFront()

```js
/**
 * Удаление первого элемента O(1)
 */
popFront() {
    // Если список пуст -- ошибка O(1)
    if (this.head ===  null) {
        throw new Error('List is empty');

    // Если список состоит из одного элемнта -- сброс head и tail O(1)
    } else if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    }

    // Присваивание в head ссылки на второй элемент O(1)
    this.head = this.head.next;
}
```

####pushBack(key)/append

```js
/**
 * Добавление элемента в конец O(1)
 */
pushBack(key) {
    // Создание нового элемента O(1)
    const newNode = new ListNode(key);

    // Если список пуст -- присваивание head и tail ссылки на новый элемент O(1)
    if (this.tail === null && this.head === null) {
        this.tail = newNode;
        this.head = newNode;
        return;
    }

    // Добавление сслыки в текущий tail на новый элемент O(1)
    this.tail.setNext(newNode);

    // Присываивание в tail ссылки на новый элемент O(1)
    this.tail = newNode;
}
```

####key topBack()

```js
/**
 * Получение последнего элемента O(1)
 */
topBack() {
    // Если список пуст -- ошибка O(1)
    if (this.tail === null) {
        throw new Error('List is empty');
    }

    // Возврат значения последнего элмемента O(1)
    return this.tail.key;
}
```

####popBack()

```js
/**
 * Удаление последнего элемента O(n)
 */
popBack() {
    // Если список пуст -- ошибка O(1)
    if (this.head === null) {
        throw new Error('List is empty');

    // Если список состоит из одного элемнта -- сброс head и tail O(1)
    } else if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    }

    // Итерирование по списке до предпоследнего элемента O(n)
    let node = this.head;
    while (node.next !== this.tail) {
        node = node.next;
    }

    // Сброс указателя на последний элемент в предпоследнем O(1)
    node.setNext(null);

    // Присываивание в tail ссылки на предпоследний элемент O(1)
    this.tail = node;
}
```
