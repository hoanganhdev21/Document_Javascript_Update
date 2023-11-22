// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeof value === "object"
// {} [] null
/**
 * Hàm kiểm tra xem một giá trị có phải là đối tượng không (không bao gồm mảng và null).
 * @param value - Tham số "giá trị" là giá trị mà chúng ta muốn kiểm tra xem nó có phải là một đối tượng hay không.
 * @returns Hàm isObject trả về true nếu giá trị là một đối tượng (không bao gồm mảng và null),
 * và sai khác.
 */
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
// {}
// plain object -> true else return false
console.log(isObject({}));

// 2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]
/**
 * Hàm `objectToArray` chuyển đổi một đối tượng thành một mảng các cặp khóa-giá trị.
 * Đối tượng @param - Tham số `đối tượng` là đối tượng mà bạn muốn chuyển thành mảng.
 * @returns Hàm `objectToArray` trả về một mảng các mảng, trong đó mỗi mảng bên trong chứa một
 * cặp khóa-giá trị từ đối tượng đầu vào.
 */
function objectToArray(object) {
  // check nếu ko phải object thì dừng
  if (!isObject(object)) return;
  // nếu là object thì xử lý
  // return Object.entries(object);
  // [a, b]
  // object[key]
  // const value = Object.keys(object).map((key) => [key, object[key]]);
  // return value;
  /* Dòng `let result = [];` khởi tạo một mảng trống gọi là `result`. Mảng này sẽ được sử dụng để
  lưu trữ các cặp khóa-giá trị của đối tượng khi chuyển đổi nó thành một mảng trong `objectToArray`
  chức năng. */
  let result = [];
  /* Vòng lặp `for...in` được sử dụng để lặp lại các thuộc tính của một đối tượng. Trong trường hợp này, nó được sử dụng
  để lặp lại các khóa của `đối tượng`. */
  for (let key in object) {
    // hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại trả về false
    /* Mã `if (object.hasOwnProperty(key))` kiểm tra xem đối tượng có thuộc tính/khóa được chỉ định hay không
    bằng `key`. Nếu đối tượng có thuộc tính, điều đó có nghĩa là thuộc tính đó không được kế thừa từ đối tượng của nó
    chuỗi nguyên mẫu và được xác định trực tiếp trên chính đối tượng đó. Nếu đối tượng có thuộc tính,
    mã `result.push([key, object[key]])` thêm một mảng `[key, object[key]]` vào `result`
    mảng. Mảng này đại diện cho một cặp khóa-giá trị từ đối tượng. */
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));

// 3. ({ a: 1, b: 2 }, 'b') => { a: 1 }
// without
// rest parameter
/**
 * Hàm `không có` lấy một đối tượng và một danh sách các khóa, đồng thời trả về một đối tượng mới với
 * các phím được chỉ định đã bị xóa.
 * Đối tượng @param - Tham số `đối tượng` là một đối tượng mà bạn muốn xóa các thuộc tính khỏi đó.
 * Khóa @param - Tham số `key` là tham số còn lại, có nghĩa là nó cho phép bạn chuyển nhiều
 * đối số dưới dạng một mảng. Trong trường hợp này, nó cho phép bạn chuyển nhiều khóa làm đối số cho
 * Chức năng `không có`.
 * @returns một đối tượng mới là bản sao của đối tượng ban đầu, nhưng đã loại bỏ các khóa đã chỉ định.
 */
function without(object, ...key) {
  // spread operator
  /* Dòng `const newObject = { ...object };` đang tạo một đối tượng mới `newObject` là một đối tượng nông
  bản sao của `đối tượng` được truyền dưới dạng đối số. Toán tử trải rộng `...` được sử dụng để trải rộng
  các thuộc tính của `đối tượng` vào đối tượng mới. Điều này cho phép chúng ta tạo một đối tượng mới với
  các thuộc tính và giá trị giống như đối tượng ban đầu. */
  const newObject = { ...object };
  /* Mã `key.forEach((item) => { delete newObject[item]; });` đang lặp qua từng phần tử trong
  mảng `key` và xóa thuộc tính tương ứng khỏi đối tượng `newObject`. Nó là
  về cơ bản là loại bỏ các khóa đã chỉ định khỏi đối tượng. */
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
  // delete object[key];
  // return object;
}
/* Câu lệnh `console.log(không có({ a: 1, b: 2 }, "b"));` đang gọi hàm `không có` với một
đối tượng `{ a: 1, b: 2 }` và một chuỗi `"b"` làm đối số. Hàm `không có` tạo một đối tượng mới
đó là một bản sao của đối tượng ban đầu, nhưng đã loại bỏ các khóa được chỉ định. Trong trường hợp này, chìa khóa
`"b"` bị xóa khỏi đối tượng `{ a: 1, b: 2 }`. Đối tượng kết quả `{ a: 1 }` sau đó được ghi vào
Bàn điều khiển. */
console.log(without({ a: 1, b: 2 }, "b"));

// 4. { a: 1, b: 2 }, { a: 1, b: 2 } -> true
// 4. { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } -> false
/**
 * Hàm `isEqualObject` kiểm tra xem hai đối tượng có cùng khóa và giá trị hay không.
 * @param obj1 - Tham số `obj1` là đối tượng đầu tiên bạn muốn so sánh.
 * @param obj2 - Tham số `obj2` là một đối tượng mà bạn muốn so sánh với `obj1` để kiểm tra xem
 * chúng có cùng khóa và giá trị.
 * @ trả về một giá trị boolean. Nó trả về true nếu hai đối tượng có cùng khóa và giá trị, và
 * sai khác.
 */
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length) return false;
  // check values of two object
  // [a, b] -> object[a] || object[b]
  const result = objkey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1 }, { a: 3 }));
