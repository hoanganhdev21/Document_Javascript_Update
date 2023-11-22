// 1. Viết function(hàm) so sánh 2 số a, b tìm ra số lớn hơn
/**
 * Hàm so sánh hai số và trả về giá trị lớn nhất, đồng thời kiểm tra xem đầu vào có
 * là những số hợp lệ.
 * @param [a=0] - 10000
 * @param [b=0] - Tham số `b` là một số đang được so sánh với tham số `a` để tìm
 * giá trị tối đa giữa hai. Nếu `b` không được cung cấp, nó sẽ mặc định là 0.
 * @returns Hàm sẽ ghi "Vui lòng nhập số hợp lệ" vào bảng điều khiển và trả về 0, vì
 * đối số thứ hai được truyền cho hàm là một chuỗi chứ không phải số.
 */
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter a valid number");
    return 0;
  }
  return Math.max(a, b);
}
console.log(compare(10000, "1000"));

// 2. In hoa chữ cái đầu trong chữ ví dụ: tuan -> Tuan, NAM -> Nam
// capitalize
function capitalize(word = "") {
  /* Dòng `if (word.length === 0) return null;` đang kiểm tra độ dài của tham số `word`
  bằng 0. Nếu đúng như vậy, điều đó có nghĩa là tham số `word` là một chuỗi rỗng. Trong trường hợp này, các
  hàm trả về `null`, cho biết rằng không có đầu vào hợp lệ. */
  if (word.length === 0) return null;
  // convert to lower case first
  /* Dòng `let newWord = word.toLowerCase().charAt(0).toUpperCase();` đang chuyển đổi cái đầu tiên
  ký tự của chuỗi `word` thành chữ hoa. */
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  // charAt(index)
  // name -> N am
  // hello -> slice(0, 3); -> hel
  // hello -> slice(1); -> ello
  // slice(startIndex, endIndex - 1)
  /* Dòng `let otherWord = word.toLowerCase().slice(1);` đang tạo một chuỗi mới gọi là
  `otherWord` bằng cách lấy một chuỗi con của chuỗi `word` bắt đầu từ chỉ mục 1. */
  let otherWord = word.toLowerCase().slice(1);
  /* Dòng `return ``;` nối chuỗi `newWord` và `otherWord`
  với nhau và trả về kết quả. Về cơ bản, đó là viết hoa chữ cái đầu tiên của `word`
  chuỗi và trả lại chuỗi đã sửa đổi. */
  return `${newWord}${otherWord}`;
}
console.log(capitalize("TUAN"));

// 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
/**
 * Hàm useCallback nhận hai giá trị, so sánh chúng rồi gọi một hàm gọi lại với
 * giá trị tối đa.
 * @param a - Tham số đầu tiên `a` là một giá trị sẽ được so sánh với `b` để xác định
 * gia trị lơn nhât.
 * @param b - Tham số "b" là một giá trị sẽ được so sánh với giá trị của tham số "a" trong
 * chức năng.
 * Gọi lại @param - Tham số `callback` là một hàm sẽ được gọi với giá trị `max` là
 * một cuộc tranh cãi.
 */
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
/**
 * Hàm "printMax" in số lớn nhất.
 * @param number - Tham số "number" là một biến đại diện cho số lượng tối đa được
 * đã in.
 */
function printMax(number) {
  console.log("Max number is " + number);
}
/* Dòng `console.log(useCallback(500, 1000, printMax));` đang gọi hàm `useCallback` với
các đối số `500`, `1000` và `printMax`. */
console.log(useCallback(500, 1000, printMax));
