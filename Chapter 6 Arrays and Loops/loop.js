// 6.6. Loop(vòng lặp):
// => Lặp đi lặp lại có thể kết thúc hoặc không kết thúc tới khi đáp ứng một điều kiện nào đó. (Vòng lặp là một chuỗi các hướng dẫn được lặp lại cho đến khi đáp ứng một điều kiện nhất định.)
// => Vòng lặp là một cách để thực thi một câu lệnh với số lần thay đổi. Hiệu ứng tương tự có thể đạt được với đệ quy, đặc biệt là trong các ngôn ngữ mà tất cả dữ liệu là bất biến, khiến cho việc cập nhật biến đếm là không thể.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 0; i < numbers.length; i++) {
  body code
}
*/
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }
/*
length: 5
i = 0;
i < 5 -> true
i++ -> 1
result: 0

i = 1;
1 < 5 -> true
i++ -> 2
result: 1

i = 2;
2 < 5 -> true
i++ -> 3
result: 2

i = 3;
3 < 5 -> true
i++ -> 4
result: 3

i = 4;
4 < 5 -> true
i++ -> 5
result: 4

i = 5;
5 < 5 -> false
loop end
*/

// ++i: cộng i lên 1 trước rồi thực hiện phép toán
// i++: thực hiện phép toán trước rồi cộng i lên 1

// for (let i = 0; i < numbers.length; i = i + 2) {
//   console.log(`The index is ${i}`);
// }
// i++ -> i = i + 1
// numbers[0]
// numbers[numbers.length - 1]
for (let i = 0; i < numbers.length; i++) {
  // console.log(`The index is ${i}`);
  // Nếu giá trị là 8 thì dừng vòng lặp
  //   console.log(`The value ${numbers[i]}`);
  // if (numbers[i] === 8) {
  //   break;
  // }
  // Nếu giá trị là 8 thì bỏ qua giá trị đó
  if (numbers[i] === 8) {
    continue; // => bỏ qua giá trị đó nếu thoả mãn.
  }
  //   console.log(`The value ${numbers[i]}`);
}

// nested loop
// [[1,2,3,4,5], [1,2,3,4,5]]
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The value ${numbers[i]}`);
  for (let j = numbers.length - 1; j >= 0; j--) {
    console.log(j);
  }
}
/*
// infinite loop
for (let i = 0; 2 > i; i--) {
}
*/
// if (2 > 1)
// let i = numbers.length - 1 -> lấy vị trí cuối cùng của mảng
// i >= 0 -> điều kiện index lớn hơn hoặc bằng 0
// i-- -> i = i - 1

// 6.7. Sao chép mảng dùng vòng lặp for
// 1. sao chép mảng dùng vòng lặp for
/* Mã này đang tạo một mảng mới gọi là `copyArr` và sử dụng vòng lặp `for` để lặp qua
mảng `numbers` và đẩy từng phần tử vào mảng `copyArr`. Điều này có hiệu quả tạo ra một bản sao của
mảng `số`. */
let copyArr = [];
//1 2 3 4
// push(value)
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);

// 2. Đảo ngược từ "i love" -> "evol i"
/* Đoạn mã này đảo ngược chuỗi "i love" và lưu kết quả vào biến `result`. nó làm
điều này bằng cách lặp qua chuỗi từ ký tự cuối cùng đến ký tự đầu tiên bằng cách sử dụng `for`
vòng lặp và nối từng ký tự với biến `kết quả`. Cuối cùng, nó ghi nhật ký đảo ngược
chuỗi vào bàn điều khiển. */
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);

// 6.8. VÒNG LẶP WHILE AND DO WHILE.
// while và do while

// 6.8.1. while:
// => nó sẽ check điều kiện trước rồi sau đó mới di xử lý.
// Syntax:
// while(condition: điều kiện) {
// body code
// }
let number = 1;
while (number < 10) {
  console.log("number is " + number);
  // điều kiện để dừng
  number = number + 1; // => // điều kiện để dừng.
  // number+=1;
  // number++;
}

// 6.8.2. do while:
// => nó sẽ xử lý trước rồi sau đó mới check điều kiện.
// Syntax:
/*
do {

} while(condition: điều kiện)
*/
let number2 = 1;
do {
  number2++;
  console.log("number is " + number2);
} while (number2 < 10);

// 6.9. for of
// for (value of array){}
// Câu lệnh for...of thực thi một vòng lặp hoạt động trên một chuỗi các giá trị có nguồn gốc từ một đối tượng có thể lặp lại. Các đối tượng có thể lặp lại bao gồm các phiên bản tích hợp sẵn như Array, String, TypedArray, Map, Set, NodeList (và các bộ sưu tập DOM khác), cũng như đối tượng đối số, trình tạo được tạo bởi các hàm trình tạo và các lần lặp do người dùng xác định.
let a = [];
for (let value of numbers) {
  value += 10;
  a.push(value);
}
for (let c of "evondev") {
  console.log(c);
}
// console.log(a);
