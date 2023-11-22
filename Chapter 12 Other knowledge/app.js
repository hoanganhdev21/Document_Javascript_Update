// 12.1. Sự khác nhau giữa i++ và ++i:
// ++i: -> ++i tăng giá trị của i lên 1 và trả về giá trị mới đó.
// i++: -> i++ cũng tương tự nhưng giá trị trả về là giá trị ban đầu của i trước khi được tăng lên 1.

let i = 1;
let j = i++;
console.log(i, j); // => 2 , 1
let a = 1;
let b = ++a;
console.log(a, b); // => 2 , 2

// 12.2. lưu ý khi retrun function:
function total(x, y) {
  return; // undefined
  x + y;
  //   return x + y; => Viết như này mới đúng.
}

// 12.3. Cách chuyển đổi dữ liệu mới:
const str = "";
// Cách đã học ở chương trước.
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
// Cách mới
console.log(+str); // => Chuyển sang Number.
console.log(!!str); // => Chuyển đối sang boolean

// 12.4. arguments in function:
// => nó là một object nó giống như mảng nhưng không phải là mảng.
// => Nó có thể chứa nhiều phần tử có thể truy xuất bằng index và length.
// => Không thể sử dụng những phương thức của mảng như forEach, map, filter,...

function number(a, b, c) {
  //   if (!arguments.length) console.log("please insert your arguments");
  console.log(typeof arguments); // => arguments chính là a, b, c
  const args = Array.from(arguments); // => convert sang arrays
  const args2 = [...arguments]; // => spread operator convert sang arrays
  console.log(arguments);
  console.log(args2);
  return a + b + c;
}
number(1, 2, 3);

// 12.5. closure in loop:
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}
// let:
// -> not hoisting
// let -> scope của nó sẽ thay đổi sau mỗi lần lặp.

// var:
// -> hoisting
// -> scope của var sau mỗi vòng lặp thì nó không thay đổi.

// 12.6. localStorage and sectionStorage:
// localStorage.getItem("abc")
// sessionStorage.getItem("abc")
// localStorage: -> Lưu trữ ở trên web khi chúng ta reload thì nó vẫn còn.
// sectionStorage: -> cơ bản giống localStorage chỉ có 1 cái khác đó là khi mà chúng ta đóng tab hoặc chúng ta đóng trình duyệt thì nó sẽ bị mất

// 12.7. NHỮNG TƯỜNG HỢP KHÔNG NÊN SỬ DỤNG ARROW FUNCTION:
// +++ Event handlers
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
});
// +++ Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(student.increment());

// 12.8. ĐỆ QUY (recursive):
// => Nó gọi lại chính nó.
function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other); // => Gọi lại chính nó.
  }
  // if (condition) stop recursive else run recursive.
}
countDown(4);
// Maximum call stack size exceded(chạy vô tận không có điều kiện dùng)
// => Khi chúng ta viết đệ quy function chúng ta phải có 1 điều kiện để dừng và 1 điều kiện để chạy

// Bài tập về đệ qui:
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
// [1,2,3,3,4,5,2,3,2,3,5,1,2]; => Kết quả chúng ta muốn.
// console.log(complexArr.flat(Infinity));

// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b);
// [1,2,3].slice()

// Hàm `flatArray` nhận mảng `arr` và độ sâu `deep` làm đối số. Nó làm phẳng mảng theo cách đệ quy đến độ sâu đã chỉ định bằng cách sử dụng phương thức `reduce` và nối. Nếu độ sâu lớn hơn 0, nó sẽ kiểm tra xem mỗi phần tử trong mảng có phải là một mảng hay không và nếu đúng như vậy, nó sẽ gọi đệ quy hàm `flatArray` với độ sâu nhỏ hơn một độ sâu hiện tại. Nếu độ sâu bằng 0 hoặc nhỏ hơn, nó chỉ trả về một bản sao của mảng gốc bằng phương thức `slice`. Hàm trả về mảng đã được làm phẳng. Câu lệnh `console.log` ở cuối gọi hàm `flatArray` với mảng `complexArr` và độ sâu `Infinity` để làm phẳng hoàn toàn mảng.
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(complexArr, Infinity));
/*
[].concat([1,2,3])
[1,2,3].concat([3, 4, 5])
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
[1,2,3]
*/

// 12.9. Object Set:
// => Nó là object lưu trữ dữ liệu duy nhất.
const mySet = new Set();

// add() -> value có thể là number, string, boolean
mySet.add(1);
mySet.add(1);
mySet.add("evondev");

// has() -> kiểm tra value đó có ở trong mySet hay không.
mySet.has(1); // true
console.log(mySet);
console.log(mySet.size);

// Xoá
mySet.delete("evondev");

// Xoá tất cả
mySet.clear();

//
const arr = [1, 2, 3, 4, 1, 1, 1, 4, 4, 4, 5, 5, 5, 7, 9];
// -> [1,2,3,4,5,7,9]

// array to Set
/*Mã này tạo một đối tượng Set mới gọi là `mySet2` và khởi tạo nó với các giá trị từ mảng `arr`. Đối tượng `Set` là tập hợp các giá trị duy nhất, vì vậy mọi giá trị trùng lặp trong mảng `arr` sẽ bị xóa. Đối tượng `mySet2` thu được sẽ chỉ chứa các giá trị duy nhất từ ​​mảng `arr`. Câu lệnh `console.log` được sử dụng để in đối tượng `mySet2` ra bảng điều khiển nhằm mục đích gỡ lỗi.*/
const mySet2 = new Set(arr);
console.log(mySet2);

// for of
/*Đây là vòng lặp `for...of` lặp lại các giá trị trong đối tượng `mySet2` Set và ghi từng giá trị vào bảng điều khiển bằng một chuỗi ký tự mẫu. Vòng lặp gán từng giá trị trong Set cho biến `item`, sau đó được sử dụng trong chuỗi ký tự mẫu để ghi giá trị vào bảng điều khiển.*/
for (let item of mySet2) {
  console.log(`item: ${item}`);
}

// Set to array
/*Mã này đang tạo một mảng mới `newArr` từ đối tượng Set `mySet2` bằng cách sử dụng phương thức `Array.from()`. Mảng `newArr` sẽ chứa tất cả các giá trị duy nhất từ ​​đối tượng Set `mySet2`. Sau đó, mã này tạo một mảng trống `result` và sử dụng vòng lặp `for` để lặp qua mảng `arr`. Đối với mỗi phần tử trong mảng `arr`, mã sẽ kiểm tra xem phần tử đó đã có trong mảng `result` hay chưa bằng cách sử dụng phương thức `includes()`. Nếu phần tử chưa có trong mảng `result`, nó sẽ được thêm vào mảng `result` bằng phương thức `push()`. Cuối cùng, mảng `kết quả` được ghi vào bảng điều khiển. Mã này về cơ bản đạt được kết quả giống như khối mã trước đó, đó là tạo một mảng các giá trị duy nhất từ ​​mảng `arr`.*/
const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2];
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);

// 12.10. Debugger in vscode:
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}

// 12.11. location in BOM:
// Browser Object Model: alert, prompt, confirm, window

// +++ Location
// => Trả ra cái đường dẫn.
console.log(location);
console.log(window.location);

// Sau 1s nó sẽ điều hướng tới trang web có đường dẫn này:
// setTimeout(() => {
//   location.href = "https://evon.dev";
// }, 1000);

let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page", 10));
console.log(params.get("page"));
console.log(params.keys());
for (let it of params.values()) {
  console.log(it);
}
params.delete("page");

// +++ History:
console.log(window.history);
// history.back(); // quay lại trang trước đó.
// history.forward(); // tới trang kế tiếp.
// history.go();

// +++ Navigator:
// => Check người dùng sử dụng thiết bị nào để truy cập vào web.
console.log(navigator.userAgent);
/*Hàm `deviceType` đang sử dụng thuộc tính `navigator.userAgent` để xác định loại thiết bị mà người dùng đang truy cập trang web từ đó. Nó kiểm tra chuỗi tác nhân người dùng để tìm các từ khóa cụ thể cho biết thiết bị là máy tính để bàn, máy tính bảng hay thiết bị di động. Nếu chuỗi tác nhân người dùng khớp với bất kỳ từ khóa nào cho máy tính bảng hoặc thiết bị di động, hàm sẽ trả về "máy tính bảng" hoặc "thiết bị di động" tương ứng. Nếu không, nó sẽ trả về "máy tính để bàn". Hàm này sau đó được gọi và kết quả được ghi vào bảng điều khiển.*/
const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
console.log(deviceType());
