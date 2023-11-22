// 3.14. Ternary operator
// Toán tử điều kiện (bộ ba) là toán tử JavaScript duy nhất có ba toán hạng: điều kiện theo sau là dấu chấm hỏi (?), sau đó là biểu thức để thực thi nếu điều kiện là đúng theo sau là dấu hai chấm (:) và cuối cùng là biểu thức để thực hiện nếu điều kiện sai. Toán tử này thường được sử dụng thay thế cho câu lệnh if...else.
const yourAge = 15;
let message = "You are a young boy";
if (yourAge >= 18) {
  message = "You are adult";
} else if (yourAge <= 10) {
  message = "You are still a child";
}
// condition ? true : false
let message2 = yourAge >= 18 ? "You are adult" : "You are still a child";
console.log(message2);
let message3 =
  yourAge >= 18
    ? "You are adult"
    : yourAge <= 10
    ? "You are still a child"
    : "You are a young boy";
console.log(message3);
// => ? điều kiện đúng.
// => : điều kiện ngược lại.
