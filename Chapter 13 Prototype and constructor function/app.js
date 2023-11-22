// Declaration, new, this, method, caution
let student = {
  name: "evondev",
  age: 28,
};
// let student2 = {
//   name: "john",
//   age: 40
// }

// 13.1. constructor function:
// => Tạo ra nhiều đối tượng mà không cần phải khai báo.
// Constructor function Person Student
// => Thường bắt đầu bằng chữ cái ddaauf tiên in hoa(Person Student ).
// => Sử dụng từ khoá new để tạo ra object mới.
function Student(name, age) {
  // this = {} => emty object
  // add properties to this
  this.name = name;
  this.age = age;

  //   method
  // return this
  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("john", 40);
// => new nó sẽ tạo ra 1 emty {} object sau đó nó sẽ gán (this.name = name; and this.age = age;) lúc này this chính là cái emty object
// => Sau này mình muốn tạo thêm nhiều nữa thì chỉ sử dụng new chứ không cần phải khai báo nhiều object như trên.
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
console.log(student2.getName());

// caution(lưu ý):
// => Khi chúng ta sử dụng constructor function thì chúng ta phải sử dụng từ khoá là new

// 13.2. Prototype: Kế thừa.
// String, Number, Boolean
// => prototype của một object chính là cha của nó.
// String.prototype, Number.prototype
// => Khi chúng ta dùng prototype để kế thừa thì chúng ta có thể sử dụng những phương thức từ cha của nó
/* Mã này đang tạo một biến chuỗi `str` với giá trị "abc", sau đó gọi hàm
`toUpperCase()` trên đó. Phương thức `toUpperCase()` là một phương thức tích hợp sẵn của đối tượng `String`
trong JavaScript, trả về một chuỗi mới với tất cả các ký tự được chuyển thành chữ hoa. trong này
hợp, đầu ra của câu lệnh `console.log()` sẽ là "ABC". */
let str = "abc";
console.log(str.toUpperCase());

/* Đoạn mã này đang thêm một phương thức mới gọi là `duplicate` vào nguyên mẫu `String`. `trùng lặp`
phương thức trả về chuỗi ban đầu được nối với chính nó. `console.log(str.duplicate())`
câu lệnh đang gọi phương thức `duplicate` trên biến `str`, là một chuỗi có giá trị
"abc". Đầu ra của câu lệnh này sẽ là "abcabc". */
String.prototype.duplicate = function () {
  return this + this;
};
console.log(str.duplicate());

/**
 * Hàm định nghĩa hàm tạo cho đối tượng "Girl" với phương thức "cook".
 */
function Girl() {
  this.cook = function () {
    console.log("your girlfriend can cook");
  };
}

/* Thêm một phương thức mới gọi là `sing` vào nguyên mẫu `Girl`. Điều này có nghĩa là bất kỳ đối tượng nào được tạo bằng cách sử dụng
hàm tạo `Girl` sẽ có quyền truy cập vào phương thức này. Phương thức `sing` chỉ ghi nhật ký
thông báo "bạn gái của bạn có thể hát" tới bảng điều khiển. */
Girl.prototype.sing = function () {
  console.log("your girlfriend can sing");
};

// Trong js Object.prototype: là lớn nhất.
/* Đoạn mã này đang thêm một phương thức mới gọi là `makeSandwich` vào nguyên mẫu `Object`. Điều này có nghĩa rằng
bất kỳ đối tượng nào được tạo bằng hàm tạo `Object` hoặc bất kỳ hàm tạo dẫn xuất nào của nó
chức năng sẽ có quyền truy cập vào phương pháp này. Phương thức `makeSandwich` chỉ ghi nhật ký thông báo "make
sandwich" vào bàn điều khiển. */
Object.prototype.makeSandwich = function () {
  console.log("make sandwich");
};
let jane = new Girl();
jane.cook();
jane.sing();
jane.makeSandwich();

// 13.3. Bind-Call-Apply:
// => Từ khoá this được dùng trong hàm này.
// 13.3.1. Bind:
// => Phương thức bind() tạo một hàm mới, khi được gọi, từ khóa this của nó được đặt thành giá trị được cung cấp, với một chuỗi đối số nhất định trước bất kỳ đối số nào được cung cấp khi hàm mới được gọi.
// => Dùng để bind cái giá trị của biến students và this của nó.

// object students
/* Tạo một đối tượng `students` với hai thuộc tính `firstName` và `lastName`, và một phương thức
`fullName` ghi lại tên đầy đủ của học sinh bằng cách truy cập `firstName` và `lastName`
thuộc tính sử dụng từ khóa `this`. */
const students = {
  firstName: "Nguyễn",
  lastName: "Hoàng Anh",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// $
// $: -> Cách viết rút gọn document.querySelector giống như jquery:
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const button = $(".button");

const button = document.querySelector(".button");
button.addEventListener("click", students.fullName.bind(students));
console.log(button, ".button");

// => Bind() không chỉ bind được giá trị this mà bind còn bind được các tham số truyền vào cho function
// partial function: -> Tạo ra 1 function mới từ function cũ bằng cách gán mặc định một số tham số cho function cũ đó.
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

/**
 * Hàm log báo lỗi sai ngày hiện tại.
 * Thông báo @param - Tham số thông báo là một chuỗi đại diện cho thông báo lỗi cần
 * được đăng nhập. Trong trường hợp này, thông báo được ghi là "Máy chủ OK!".
 */
// function logErrToday(message) {
//   log("Error", "Today", message);
// }
// logErrToday("Server OK!");

/* Mã này đang tạo một hàm mới `logErrToday` bằng cách liên kết hàm `log` với hai hàm đầu tiên
đối số được đặt thành `"Lỗi"` và `"Hôm nay"`. Đối số `null` được sử dụng để đặt giá trị `this` thành
đối tượng toàn cầu. Khi `logErrToday` được gọi với đối số `"Máy chủ OK!"`, nó sẽ ghi nhật ký
thông báo `"Lỗi Hôm nay Máy chủ OK!"`. Đây là một ví dụ về ứng dụng chức năng một phần, trong đó một ứng dụng mới
chức năng được tạo bằng cách sửa một số đối số của một chức năng hiện có. */
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");

// 13.3.2. Call and Apply:
// => Sử dụng trong function.
// Khác với bind(): -> Nó gọi hàm trực tiếp(khi gọi nó sẽ chạy luôn).
/* Creating an object `person` with two properties `firstName` and `lastName`. */
const person = {
  firstName: "Hoàng Anh",
  lastName: "Frontend developer",
};

/**
 * Hàm ghi lại một chuỗi bao gồm hai chuỗi đầu vào và các giá trị của `firstName` và
 * Thuộc tính `lastName` của một đối tượng.
 * @param str1 - Đối số chuỗi đầu tiên sẽ được ghi vào bảng điều khiển.
 * @param str2 - Tham số chuỗi thứ hai sẽ được sử dụng trong câu lệnh console.log.
 */
function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}

// call:
// => Phương thức call() gọi hàm với giá trị this đã cho và các đối số được cung cấp riêng lẻ.
// function.call(this, arg1, arg2,....)
// -> this chính là person.
// arg1 -> argument.
// "hello" -> str1.
// "good morning" -> str2.
sayHello.call(person, "hello", "good morning");

// apply:
// => Phương thức apply() gọi hàm đã chỉ định với giá trị this đã cho và các đối số được cung cấp dưới dạng một mảng (hoặc một đối tượng giống như mảng).
// function.apply(this, [arg1, arg2,....])
// argument sẽ dưới dạng mảng[arg1, arg2,....]
// -> this chính là person.
// "hello" -> str1.
// "good morning" -> str2.
sayHello.apply(person, ["hi", "good evening"]);

/* Mã này đang tạo hai mảng `arr` và `arr2` với các giá trị `[1, 2, 3]` và `[2, 3, 4]`
tương ứng. Phương thức `push` sau đó được gọi trên mảng `arr` với phương thức `apply` để thêm
các phần tử của `arr2` đến `arr`. Phương thức `apply` được sử dụng để chuyển các phần tử của `arr2` thành các phần tử riêng lẻ
đối số cho phương thức `push`. Cuối cùng, câu lệnh `console.log` ghi nhật ký mảng `arr` đã cập nhật
với các giá trị `[1, 2, 3, 2, 3, 4]`. */
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);
