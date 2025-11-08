### 🔹 HTML — структура страницы

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Rinķa linijas un laukuma apreķināšāna</h1>
    <p>
        <input type="text" name="Ievadiet numuru" id="radiusInput">
        <button id="calcButton">Reķināt</button>
    </p>
    <p id="output"></p>

    <script src="script.js"></script>
</body>
</html>
```

#### 📌 Что делает каждая часть:
- `<!DOCTYPE html>` — указывает, что это HTML5-документ.
- `<meta charset="UTF-8">` — поддержка латышских символов.
- `<meta name="viewport"...>` — адаптивность на мобильных устройствах.
- `<h1>` — заголовок: "Расчёт длины окружности и площади круга".
- `<input>` — поле ввода радиуса.
- `<button>` — кнопка для запуска расчёта.
- `<p id="output">` — контейнер для вывода результата.
- `<script src="script.js">` — подключение JavaScript-файла.

> ❗ Не стоит помещать `<h1>` внутрь `<p>` — это нарушает HTML-структуру.

---

### 🔹 JavaScript — логика расчёта

```js
const radiusInput = document.getElementById("radiusInput");
const calcButton = document.getElementById("calcButton");
const outputContainer = document.getElementById("output");
const PI = 3.14;

calcButton.addEventListener('click', handleClick);

function handleClick() {
    outputContainer.innerText = 2 * PI * radiusInput.value;
}
```

#### 📌 Что делает каждая строка:
- `getElementById(...)` — находит элементы по `id`.
- `PI = 3.14` — значение числа π.
- `addEventListener(...)` — добавляет обработчик события: при клике вызывается `handleClick`.
- `handleClick()` — функция, которая:
  - берёт значение из поля ввода (`radiusInput.value`)
  - умножает на `2 * PI` — формула длины окружности
  - выводит результат в `outputContainer.innerText`

> ❗ Ошибка была в `radiusInput.Value` — нужно `value` с маленькой буквы.

---

### 🔹 Что такое `innerText`

`innerText` — это свойство HTML-элемента, которое позволяет получить или изменить **текстовое содержимое** элемента.

```js
outputContainer.innerText = "Rezultāts";
```

Это вставит текст `"Rezultāts"` внутрь элемента `<p id="output">`.

---

### 🔹 Улучшенная версия с проверкой и расчётом площади

```js
function handleClick() {
    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius)) {
        outputContainer.innerText = "Lūdzu, ievadiet derīgu skaitli!";
    } else {
        const circumference = 2 * PI * radius;
        const area = PI * radius * radius;
        outputContainer.innerText = `Linija: ${circumference.toFixed(2)}, Laukums: ${area.toFixed(2)}`;
    }
}
```

---

Хочешь, могу помочь добавить стили или перевести всё на латышский.
