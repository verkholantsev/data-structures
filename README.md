#Структуры данных

##TOC

##Связанные списки

Они же Linked Lists.

###Структура

```
     ключ    указатель на следующий элемент
      |       |
      v       v
    ┌──────┬──────┐
    | key  | next |
    └──────┴──────┘

    head                     tail
      |                       |
      v                       v
    ┌───┬───┐   ┌───┬───┐   ┌───┬───┐
    | 1 |  ─┼─> | 2 |  ─┼─> | 3 | X │
    └───┴───┘   └───┴───┘   └───┴───┘
```

###Операции над связанными списками

####Добавление в начало (pushFront)

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

####Возврат первого элемента (topFront)

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

####Удаление первого элемента (popFront)

```js
/**
 * Удаление первого элемента O(1)
 */
popFront() {
    // Если список пуст -- ошибка O(1)
    if (this.head ===  null) {
        throw new Error('List is empty');

    // Если список состоит из одного элемента -- сброс head и tail O(1)
    } else if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    }

    // Присваивание в head ссылки на второй элемент O(1)
    this.head = this.head.next;
}
```

####Добавление в конец (pushBack(key)/append)

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

####Возврат последнего элемента (topBack)

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

####Удаление последнего элемента (popBack)

```js
/**
 * Удаление последнего элемента O(n)
 */
popBack() {
    // Если список пуст -- ошибка O(1)
    if (this.head === null) {
        throw new Error('List is empty');

    // Если список состоит из одного элемента -- сброс head и tail O(1)
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

####Поиск элемента в списке (find)

```js
/**
 * Поиск элемента в списке
 * В худшем случае -- O(n)
 * @returns {boolean}
 */
find(key) {
    // Итерирование до тех пор, пока не будет найден нужный элемент 
    // В худшем случае -- O(n)
    let node = this.head;
    while (node !== null) {
        // Если текущий элемент имеет искомое значение -- возврат true O(1)
        if (node.key === key) {
            return true;
        }
        node = node.next;
    }

    // Если элемент не найден -- возврат false O(1)
    return false;
}
```

####Удаление элемента по значению (erase)

```js
/**
 * Удаление элемента из списка по значению
 * В худшем случае -- O(n)
 */
erase(key) {
    let node = this.head;
    // Итерирование до тех пор, пока не будет найден нужный элемент 
    // В худшем случае -- O(n)
    while (node !== null) {
        // Если есть следующий элемент и его значение равно искомому --
        // выставление ссылки на элемент, который следует за следующим, в текущий элемент O(1)
        if (node.next !== null && node.next.key === key) {
            node.setNext(node.next.next);
            return;
        }
        node = node.next;
    }
}
```

####Проверка на пустоту (empty)

```js
/**
 * Проверка списка на пустоту O(1)
 * @returns {boolean}
 */
empty() {
    // Проверка на наличие head O(1)
    return this.head === null;
}
```

####Получение длины списка (size)

```js
/**
 * Получение длины списка O(n)
 * @todo Можно за O(1), если хранить длину
 * @returns {number}
 */
size() {
    let size = 0;
    let node = this.head;

    // Итерирование до конца списка. На каждом шагу счетчик
    // увеличивается на единицу O(n)
    while (node !== null) {
        size += 1;
    }

    return size;
}
```

####Добавление по индексу (insert)

```js
/**
 * Добавление элемента по индексу O(n)
 * @param {number} index
 * @param {*} key
 */
insert(index, key) {
    // Если индекс равен нулю -- добавление в начало O(1)
    if (index === 0) {
        this.pushFront(key);
        return;
    }

    // Создание нового элемента O(1)
    const newNode = new ListNode(key);

    // Итерирование до нужного индекса O(n)
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
        node = node.next;
    }

    // Присваивание указателя в новом элементе O(1)
    newNode.setNext(node.next);

    // Присваивание указателя на новый элемент в текущем O(1)
    node.setNext(newNode);
}
```

####Возврат элемента по индексу с конца (nthFromEnd)

```js
/**
 * Поиск n-го элемента с конца O(n)
 * @param {number} index
 * @returns {number}
 */
nthFromEnd(index) {
    // Установка значения смещения на ноль O(1)
    let offset = 0;

    // Установка главного указателя итерации на head O(1)
    let node = this.head;

    // Установка указателя искомого элемента в null O(1)
    let resultNode = null;

    // Интерирование до конца списка O(n)
    while (node !== null) {
        // Если текущий смещение от начало равно искомому индексу,
        // то необходимо выставить указатель искомого элемента на head O(1)
        if (offset === index) {
            resultNode = this.head;

        // Если указатель на искомый элемент выставлен -- смещение его на следующий элемент O(1)
        } else if (resultNode !== null) {
            resultNode = resultNode.next;
        }

        // Смещение главного указателя итерации и увеличение смещения на единицу O(1)
        node = node.next;
        offset++;
    }

    // В конце итерации в указателе искомого элемента будет n-ый элемент с конца
    // Возврат значения искомого элемента O(1)
    return resultNode.key;
}
```

####Разворот списка (reverse)

```js
/**
 * Разворот списка O(n)
 */
reverse() {
    // Если длина массива равна единице -- возврат никакие действия не нужны O(1)
    if (this.head === this.tail) {
        return;
    }

    // Присваивание в tail ссылки на head O(1)
    this.tail = this.head;

    // Итерирование со второго элемента O(1)
    let node = this.head.next;

    // Сохранение ссылки на элемент, предшествующий главному указателю итерации O(1)
    let prev = this.head;

    // Итерирование до конца списка O(n)
    while (node !== null) {
        // Если ссылка на следующий элемент пуста -- присваивание текущего элемента в head O(1)
        if (node.next === null) {
            this.head = node;
        }

        // Сохранение ссылки на текущий элемент O(1)
        var current = node;

        // Перенос главного указателя итерации на следующий элемент O(1)
        node = node.next;

        // Разворот ссылки для текущего элемента. Выставление в качестве next ссылки на предыдущий элемент O(1)
        current.setNext(prev);

        // Сохранение ссылки на текущий элемент в качестве предыдущего O(1)
        prev = current;
    }

    // В конце -- обнуление ссылки на следующий элемент в tail O(1)
    this.tail.setNext(null);
}
```
