// 3.13. Switch-Case
const fruit = "lemon";
if (fruit === "apple") {
  console.log("You like to eat apple");
}
if (fruit === "lemon") {
  console.log("You like to eat lemon");
}
if (fruit === "watermelon") {
  console.log("You like to eat watermelon");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// => key là variable truyền vào.
// => value giá trị mình muốn.
// => default để mặc định.
// Câu lệnh chuyển đổi đánh giá một biểu thức, so khớp giá trị của biểu thức với một loạt mệnh đề trường hợp và thực thi các câu lệnh sau mệnh đề trường hợp đầu tiên có giá trị khớp, cho đến khi gặp câu lệnh ngắt. Mệnh đề mặc định của câu lệnh chuyển đổi sẽ được nhảy tới nếu không có trường hợp nào khớp với giá trị của biểu thức.
const fruits = "lemon"
switch (fruits) {
  case "apples":
    console.log("You like to eat apple");
    break;
  case "watermelon":
  case "lemons":
    console.log("You like to eat lemon and water melon");
    break;
  default:
    console.log("You like to eat orange");
    break;
}

const number = "500";
switch (Number(number)) {
  case 500:
    console.log("500");
    break;

  default:
    break;
}
