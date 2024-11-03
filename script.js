"use strict"; // Включение строгого режима для улучшения качества кода

// Получение элементов DOM по их ID
const form = document.getElementById("bmi-form"); // Форма для ввода данных
const heightInput = document.getElementById("height"); // Поле ввода роста
const weightInput = document.getElementById("weight"); // Поле ввода веса
const resultDiv = document.getElementById("result"); // Блок для отображения результата

// Добавление обработчика события отправки формы
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения формы (перезагрузка страницы)

    // Получение значений из полей ввода и преобразование их в числа
    const height = parseFloat(heightInput.value); // Рост в см
    const weight = parseFloat(weightInput.value); // Вес в кг

    // Проверка корректности введенных данных
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || height > 300 || weight > 500) {
        // Если данные некорректны, отображаем сообщение об ошибке
        resultDiv.textContent = "Пожалуйста, введите корректные значения для роста и веса.";
        resultDiv.classList.add("active"); // Добавляем класс для отображения блока
        resultDiv.style.backgroundColor = "#f8d7da"; // Красный фон для ошибки
        resultDiv.style.color = "#721c24"; // Темный красный цвет текста
        return; // Прерываем выполнение функции
    }

    // Преобразование роста из сантиметров в метры
    const heightInMeters = height / 100;

    // Расчет BMI по формуле: вес (кг) / (рост (м))^2
    const bmi = weight / (heightInMeters * heightInMeters);

    // Округление значения BMI до двух десятичных знаков
    const bmiRounded = bmi.toFixed(2);

    // Определение категории BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Недостаточный вес";
    } else if (bmi >= 18.5 && bmi < 25) { // Исправлено условие на bmi < 25
        category = "Нормальный вес";
    } else if (bmi >= 25 && bmi < 30) { // Исправлено условие на bmi < 30
        category = "Избыточный вес";
    } else {
        category = "Ожирение";
    }

    // Формирование строки результата
    const resultText = `Ваш BMI: ${bmiRounded} (${category})`;

    // Отображение результата в блоке
    resultDiv.textContent = resultText;
    resultDiv.classList.add("active"); // Добавляем класс для отображения блока
    resultDiv.style.backgroundColor = "#d4edda"; // Зеленый фон для положительного результата
    resultDiv.style.color = "#155724"; // Темно-зеленый цвет текста

    // Логирование данных для отладки
    console.log(`Рост: ${height} см, Вес: ${weight} кг, BMI: ${bmiRounded}, Категория: ${category}`);
});
