/* Завдання 1 */
let place1 = confirm("Заповнене поле!!!");
let place2 = confirm("І тут тeж");
if (place1 && place2) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}
/* Завдання 2 */
let num1 = confirm(6);
let num2 = confirm(5);
if (num1 + num2) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}
/* Завдання 3 */
let text = confirm(" Java Script");
if ((text = "Java Script")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}
/* Завдання 4 */
let number = prompt("Введіть число, будь ласка!");
if (number > 10 && number < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
/* Завдання 5 */

let email = prompt("Введіть свою пошту будь ласка, будь ласка!");
if (email.includes("@")) {
  alert('Електронна адреса містить символ "@".');
} else {
  alert('Електронна адреса не містить символа "@".');
}
