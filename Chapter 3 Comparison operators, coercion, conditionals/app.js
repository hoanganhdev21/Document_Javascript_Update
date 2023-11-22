// 3.1. Hàm.
"4.5"; // parseFloat.
"4"; // parseInt.
// 3.1.1. Hàm number:
// Number(value) -> number.
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abcdef")); // => value không phải là số thì sẽ convert sang NaN.

// NaN: Not a Number
console.log(Number(undefined)); // => NaN.
console.log(Number(null)); // => 0.
console.log(Number(false)); // => 0.
console.log(Number("")); // => 0.
console.log(Number(NaN)); // => NaN.
// falsy values
console.log(Number(true)); // => 1.

// 3.1.2. Hàm string:
// String(value) -> string.
console.log(String(4.5)); // => "4.5".
console.log(String(null)); // => "null".
console.log(String(undefined)); // => "undefined".
console.log(String(NaN)); // => "NaN".
console.log(String(false)); // => "false".
console.log(String(true)); // => "true".

// 3.1.3. Hàm Boolean:
// Boolean(value) -> true or false.
console.log(`Boolean of zero: ${Boolean(0)}`); // => false.
console.log(`Boolean of "": ${Boolean("")}`); // => false.
console.log(`Boolean of null: ${Boolean(null)}`); // => false.
console.log(`Boolean of undefined: ${Boolean(undefined)}`); // => false.
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // => false.
console.log(`Boolean of false: ${Boolean(false)}`); // => false.
console.log(`Boolean of text tuan: ${Boolean("tuan")}`); // => true.

// 3.2.  type coercion
// => Ép buộc loại là chuyển đổi tự động hoặc ngầm định các giá trị từ loại dữ liệu này sang loại dữ liệu khác (chẳng hạn như chuỗi thành số). Chuyển đổi kiểu tương tự như ép buộc kiểu vì cả hai đều chuyển đổi giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác với một điểm khác biệt chính — kiểu ép buộc là ẩn trong khi chuyển đổi kiểu có thể ẩn hoặc rõ ràng.
// => Chuyển đổi dữ liệu từ kiểu này sang kiểu khác.

// + - * / ** % --
/**
 *      ( + )  ==> Cộng
 *      ( - )  ==> Trừ
 *      ( * )  ==> Nhân
 *      ( / )  ==> Chia
 *      ( % )  ==> Chia lấy dư.
 *      ( ++)  ==> Tăng 1 giá trị số.
 *      ( --)  ==> Giảm 1 giá trị số.
 *      ( **)  ==> Luỹ thừa.
 */
// => - * / thì bình thường and + có hơi đặc biệt.
// weird
console.log(1 + 2);
console.log(10 + 10);
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
// 10 -> "10" + "10" ->  "1010"
// console.log(String(10) + "10");
console.log("10" - 10); // 0 Number("10") - 10
console.log(null + ""); // "null"
console.log(null + undefined); // NaN
console.log("0" - 1); // Number("") -> 0 -> 0 - 1 = -1
console.log(false - true); // -1
console.log(null + 10); // 10

// % => chia hết.

// 3.3. Toán tử so sánh > < >= <=
// => return true or false.
/**
 *
 *      (!=)      ==>       Không bằng.
 *      (==)      ==>       Bằng.
 *      (>)       ==>       Lớn hơn.
 *      (<)       ==>       Nhỏ hơn.
 *      (>=)      ==>       Lớn hơn hoặc bằng.
 *      (<=)      ==>       Nhỏ hơn hoặc bằng.
 *
 */
console.log(5 > 7); // false
console.log(50 > 7); // true
console.log(50 < 7); // false
console.log(6 >= 6); // true
console.log(6 <= 6); // true

// 3.4. Toán tử logic: &&(dấu và) ||(dấu hoặc) !(dấu phủ định)
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3); // false || true -> true
const amIWrong = true;
console.log(!amIWrong); // false

// 3.5. Boolean
// #Boolean &&
// false && true -> false
// true && false -> false
// false && false -> false
// true && true -> true
// #Boolean ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false.

// 3.6. Toán tử gán
/**
Toán tử            Ví dụ            Tương đương
=                  x = y            x = y
+=                 x += y           x = x + y
-=                 x -= y           x = x - y
*=                 x *= y           x = x * y      
/=                 x /= y           x = x / y
**=                x **= y          x = x ** y
*/

// 3.7. Toán tử ++ và --
// Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1.
// Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.
// Tổng kết:
// (+) x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng.
// (+) ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng.
// (+) x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm.
// (+) --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm.

//3.8. Toán tử nối chuỗi( string operator)
var firstName = "Hoàng Anh";
var lastName = "Nguyễn";
console.log(firstName + lastName);
// + nếu vế trái và phải của nó là số thì nó là toán tử cộng số học sẽ thực hiện phép tính tổng.
// Ngược lại 1 trong hai vế của nó là chuỗi thì nó là toán tử nối chuỗi và thực hiện nối chuỗi.

// 3.9. == loose equality vs === strict equality
console.log("=== vs ==");
console.log(10 == "10"); // "10" == "10"
console.log(true == 1); // Number(true) = 1 -> 1 == 1 -> true
console.log(1 == "01"); // Number("01") -> 1 -> 1 == 1 -> true
console.log(null == ""); // "null" != "" -> false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // false

// Khi nào nên dùng == và khi nào nên dùng === trong câu lệnh điều kiện?
// Trả lời:
// => Với == chỉ so sánh về giá trị
// => Với === Nó còn so sánh cả kiểu dữ liệu

// 3.10. Câu hỏi phỏng vấn.
// Vì sao "{}"=="{}" lại trả về true nhưng {}=={} lại trả về false trong JS.
// => Với 2 variable chứa giá trị nguyên thuỷ như number string boolean thì toán tử sẽ so sánh về giá trị của 2 variable nếu giá trị của 2 variabler giống nhau thì trả về true ngược lại là false. Còn với 2 variable dưới dạng object thì toán tử so sánh về tham chiếu của 2 variable nếu tham chiếu của 2 variable trỏ về 2 vùng nhớ khác nhau thì sẽ trả về false. 
// Nếu object có cấu trúc phức tạp chia thành nhiều node lồng nhau thì vùng nhớ của các node trong object cũng sẽ nằm ở các vùng nhớ khác nhau và được liên kết với nhau bằng tham chiếu do đó nếu ta khởi tạo variable và gán cho nó tham chiếu đến một node trong object hoặc vào object của variable khác khi ta thay đổi giá trị của node trong variable này thì khi đọc giá trị của node tương ứng trong variable kia chúng ta sẽ thấy hai giá trị giống hệt nhau điều này dẫn đến việc nếu dùng toán tử == để nhận biết trạng thái của một node trong object có thay đổi hay không đôi khi không chính xác nếu ta chỉ đơn giản gán node cũ vào một variable rồi sau đó so sánh variable này với chính node đó sau khi ta thay đổi giá trị của node
