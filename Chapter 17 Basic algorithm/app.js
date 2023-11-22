// Thuật toán:
// => Một thuật toán là một loạt các hướng dẫn khép kín để thực hiện một chức năng.
// => Nói cách khác, thuật toán là một phương tiện mô tả cách giải một bài toán sao cho nó có thể được giải nhiều lần, bởi con người hoặc máy móc. Các nhà khoa học máy tính so sánh hiệu quả của các thuật toán thông qua khái niệm "Độ phức tạp của thuật toán" hoặc ký hiệu "Big O".

// 17.1. Big O Notation
// => Đo lường độ phức tạp của 1 thuật toán nào đó.
// => Khi chúng ta giải quyết 1 bài toán sẽ có rất nhiều thuật toán mỗi người có 1 thuật toán khác nhau chúng ta cần phải tìm ra thuật toán tối ưu nhất và hiệu quả nhất và chúng ta phải đo lường nó xem nó hoạt động như thế nào.
// O(1): [].push(item): best -> Khi làm việc với mảng
// O(n): for: Good -> dùng for
// O(logn): for([].push(item)): OK
// O(n^2): nested loop for(for): Bad
// O(n!): 6! = 6*5*4*3*2*1: Terrible
// function factorial(n) {
//   let num = n;
//   for (let index = 0; index < n; index++) {
//     num = factorial(n - 1);
//   }
//   return;
// }

// 17.2. Sort and search(xắp xếp và tìm kiếm).
// +++++
// bubbleSort:
// => Xắp xếp nổi bọt
/**
 * Đây là chức năng sắp xếp bong bóng trong JavaScript sắp xếp một mảng theo thứ tự tăng dần.
 * Mảng @param - một mảng các số cần được sắp xếp bằng thuật toán sắp xếp bong bóng.
 * @returns Hàm `bubbleSort` trả về một mảng đã được sắp xếp.
 */
function bubbleSort(array) {
  const arr = [...array]; // spread operator để biến thành mảng
  // Dùng 2 vòng lặp lồng nhau -> O(n^2)
  /* Đoạn mã này đang triển khai thuật toán sắp xếp bong bóng để sắp xếp một mảng theo thứ tự tăng dần. Nó sử dụng
  hai vòng lặp lồng nhau để so sánh các phần tử liền kề trong mảng và hoán đổi vị trí của chúng nếu chúng
  không theo đúng thứ tự. Vòng lặp bên ngoài lặp trên toàn bộ mảng, trong khi vòng lặp bên trong
  lặp lại phần chưa được sắp xếp của mảng. Biến `num` đại diện cho phần tử hiện tại
  được so sánh và `next` đại diện cho phần tử tiếp theo. Nếu `num` lớn hơn `next`, thì
  các vị trí được hoán đổi bằng cách sử dụng phép gán phá hủy. Quá trình này được lặp lại cho đến khi toàn bộ
  mảng được sắp xếp. */
  for (let i = 0; i < arr.length; i++) {
    /* Đây là vòng lặp bên trong của thuật toán sắp xếp bong bóng. Nó lặp lại phần chưa được sắp xếp của
    mảng và so sánh các phần tử liền kề. Các biến `num` và `next` đại diện cho hiện tại
    phần tử đang được so sánh và phần tử tiếp theo, tương ứng. Nếu `num` lớn hơn `next`,
    vị trí của chúng được hoán đổi bằng cách sử dụng phép gán phá hủy. Quá trình này được lặp lại cho đến khi
    toàn bộ mảng được sắp xếp. */
    for (let j = 0; j < arr.length - i; j++) {
      let num = arr[j];
      let next = arr[j + 1];
      if (num > next) {
        // const temp = arr[j + 1]; // temp: 4
        // arr[j + 1] = arr[j]; // next: 5
        // arr[j] = temp; // num: 4
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
const arr = [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999];
console.log(bubbleSort(arr));
console.log("arr", arr);
// bubble sort: sắp xếp nổi bọt
// [1, 5, 4, 8, 43, 32, 123, 0, 92, 63, 55, 999]
// [1,4,5,8, 3....]
// [1,4,5,3,8]
// [1,4,3,5,8]
// [1,3,4,5,8]
// Cách hoạt động:
// Nó sẽ kiểm tra hai số kiền kề ở trong mảng đó nếu như số nhỏ hơn hoặc lớn hơn sẽ đổi vị trí cho nhau theo tăng dần cho tới khi kiểm tra tới hai số liền kề cuối cùng.

// 17.3. Insertion sort:
// => Xắp xếp chèn
// -> Khá giống với bubbleSort
/**
 * Hàm thực hiện sắp xếp chèn trên một mảng số.
 * @param arr - một mảng các số cần được sắp xếp bằng thuật toán sắp xếp chèn.
 * @trả về một mảng được sắp xếp theo thứ tự tăng dần.
 */
function insertionSort(arr) {
  const array = [...arr]; // spread operator để biến thành mảng.
  /* Đoạn mã này đang triển khai thuật toán sắp xếp chèn để sắp xếp một mảng theo thứ tự tăng dần. Nó sử dụng
  hai vòng lặp lồng nhau để so sánh các phần tử liền kề trong mảng và chèn phần tử hiện tại vào phần tử của nó
  đúng vị trí trong phần đã sắp xếp của mảng. Vòng lặp bên ngoài lặp lại trên toàn bộ mảng,
  trong khi vòng lặp bên trong lặp qua phần đã sắp xếp của mảng. Biến `current` đại diện cho
  phần tử hiện tại đang được so sánh và `j` đại diện cho chỉ mục của phần tử trong phần được sắp xếp
  của mảng. Vòng lặp bên trong so sánh `hiện tại` với các phần tử trong phần được sắp xếp của mảng
  và dịch chuyển chúng sang bên phải nếu chúng lớn hơn `hiện tại`. Quá trình này được lặp đi lặp lại cho đến khi
  `current` ở đúng vị trí của nó trong phần được sắp xếp của mảng. */
  for (let i = 1; i < array.length; i++) {
    // i = 2
    const current = array[i]; // 4
    let j; // undefined
    // j: 2-1 = 1
    // array[j] = 3
    // 3 > 5
    // array[j] = 5 > current: 4
    /* Đây là vòng lặp bên trong của thuật toán sắp xếp chèn. Nó so sánh phần tử hiện tại
    (`current`) với các phần tử trong phần được sắp xếp của mảng (từ chỉ số `0` đến `i-1`) và
    dịch chuyển chúng sang bên phải nếu chúng lớn hơn `hiện tại`. Vòng lặp bắt đầu tại chỉ mục `i-1` và
    lặp ngược lại cho đến khi nó đến phần đầu của phần được sắp xếp của mảng (chỉ số `0`) hoặc
    tìm phần tử nhỏ hơn hoặc bằng `current`. Dòng `mảng[j + 1] = mảng[j]`
    dịch chuyển phần tử tại chỉ mục `j` sang phải một vị trí để nhường chỗ cho `hiện tại`.
    Cuối cùng, `array[j + 1] = current` chèn `current` vào đúng vị trí của nó trong phần đã sắp xếp
    của mảng. */
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      // array[2] = 5
    }
    array[j + 1] = current; // 5
  }
  return array;
}

let data = [3, 5, 4]; // [3, 4, 5]
console.log(insertionSort(data));
console.log("data", data);
// [3, 5, 4]
// [3, 5, 5]
// [3, 4, 5]
// Insertion sort: sắp xếp chèn.
// [5, 3, 6, 1, 4]
// [3, 5, 6, 1, 4]
// [1, 3, 5, 6, 4]
// [1, 3, 4, 5, 6]

// 17.4. selectionSort:
// Xắp xếp chèn
/**
 * Hàm thực hiện thuật toán sắp xếp lựa chọn để sắp xếp một mảng theo thứ tự tăng dần.
 * Mảng @param - một mảng các số cần được sắp xếp bằng thuật toán sắp xếp lựa chọn.
 * @trả về mảng đã sắp xếp theo thứ tự tăng dần.
 */

function selectionSort(array) {
  /* Mã này đang triển khai thuật toán sắp xếp lựa chọn để sắp xếp một mảng theo thứ tự tăng dần. Các
  vòng lặp bên ngoài lặp lại trên toàn bộ mảng, trong khi vòng lặp bên trong lặp lại phần chưa được sắp xếp của
  mảng. Biến `minIndex` đại diện cho chỉ mục của phần tử tối thiểu trong phần tử chưa sắp xếp
  một phần của mảng. Vòng lặp bên trong so sánh từng phần tử trong phần chưa được sắp xếp của mảng với
  phần tử tối thiểu hiện tại và cập nhật `minIndex` nếu tìm thấy phần tử nhỏ hơn. Sau vòng lặp bên trong
  hoàn thành, phần tử tối thiểu được hoán đổi với phần tử đầu tiên trong phần chưa được sắp xếp của
  mảng. Quá trình này được lặp lại cho đến khi toàn bộ mảng được sắp xếp. */
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i; // 0
    // j: 1
    /* Mã này đang thực hiện vòng lặp bên trong của thuật toán sắp xếp lựa chọn. Nó lặp đi lặp lại trên
    phần chưa sắp xếp của mảng (bắt đầu từ chỉ mục `i+1`) và so sánh từng phần tử với
    phần tử tối thiểu hiện tại (tại chỉ mục `minIndex`). Nếu nó tìm thấy một phần tử nhỏ hơn, nó sẽ cập nhật
    `minIndex` vào chỉ mục của phần tử đó. Sau khi vòng lặp bên trong hoàn thành, phần tử tối thiểu là
    đổi chỗ với phần tử đầu tiên trong phần chưa sắp xếp của mảng (tại chỉ mục `i`). quá trình này là
    lặp lại cho đến khi toàn bộ mảng được sắp xếp. */
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // 1 3 -> 3
      }
    }
    /* Dòng mã này hoán đổi phần tử tối thiểu (tại chỉ mục `minIndex`) với phần tử đầu tiên
    trong phần chưa sắp xếp của mảng (tại chỉ mục `i`). Nó sử dụng phép gán hủy để hoán đổi
    giá trị của hai phần tử mà không cần một biến tạm thời. */
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
console.log(selectionSort([5, 3, 4, 1, 2]));
// Sắp xếp chèn: Selection sort
// [5,3,4,1,2]
// min = 5; 5 3 4 1 2
// sorted array(mảng đã sắp xếp): 1 | unsorted array(mảng chưa sắp xếp): 3 4 5 2
// sorted array: 1 2 | unsorted array: 4 5 3
// sorted array: 1 2 3 | unsorted array: 5 4
// sorted array: 1 2 3 4 | unsorted array: 5
// sorted array: 1 2 3 4 5 | unsorted array []
// => [1, 2, 3, 4, 5]

// 17.5. quick sort: Sắp xếp nhanh nhất
// Có arr = [3,7,9,0,1,5,4,2]
// pivot(chia để trị) -> nó sẽ tách tahnhf hai mảng để so sánh với nhau.
// pivot arr[0]
// 0 1 2 pivot 7 9 5 4
// pivot: 0
// pivot 1 2
// pivot: 1
// 2
// 0 1 2
// 7 9 5 4
// pivot: 7
// 5 4 pivot(7) 9
// pivot: 5
// 4 pivot(5)
// 4 5 7 9
// 0 1 2 pivot(3) 4 5 7 9
/**
 *
 *
 */
/**
 * Đây là một hàm JavaScript thực hiện thuật toán sắp xếp nhanh để sắp xếp một dãy số.
 * @param arr - Mảng đầu vào cần được sắp xếp bằng thuật toán quicksort.
 * @returns Hàm `quickSort` đang trả về một mảng được sắp xếp theo thứ tự tăng dần.
 */
function quickSort(arr) {
  /* `const list = [...arr];` đang tạo một mảng mới `list` là bản sao của mảng ban đầu `arr`
  sử dụng toán tử trải rộng `...`. Điều này được thực hiện để tránh sửa đổi mảng ban đầu trong quá trình
  quá trình sắp xếp. */
  const list = [...arr];
  /* Dòng mã này đang kiểm tra xem độ dài của mảng đầu vào `list` có nhỏ hơn 2 hay không.
  có nghĩa là mảng chỉ có một phần tử hoặc trống, và do đó nó đã được sắp xếp. trong này
  trường hợp, hàm trả về mảng `list` ban đầu mà không thực hiện thêm bất kỳ thao tác sắp xếp nào. Cái này
  là trường hợp cơ bản của hàm đệ quy, dừng đệ quy và trả về mảng đã sắp xếp
  một khi mảng đã được chia thành các mảng con một phần tử. */
  if (list.length < 2) return list;
  /* `const pivot = list[0];` đang gán phần tử đầu tiên của mảng `list` cho `pivot`
  Biến đổi. Phần tử này sẽ được sử dụng làm phần tử trục (hoặc phân vùng) trong sắp xếp nhanh
  thuật toán. Phần tử trục được sử dụng để chia mảng thành hai mảng con, một mảng chứa
  các phần tử nhỏ hơn trục và phần tử khác chứa các phần tử lớn hơn trục. */
  const pivot = list[0];
  /* Những dòng mã này đang lọc các phần tử của mảng `list` thành hai mảng con dựa trên
  cho dù chúng nhỏ hơn hay lớn hơn phần tử `pivot`. Phương thức `filter()` tạo một đối tượng mới
  mảng với tất cả các phần tử vượt qua bài kiểm tra được thực hiện bởi hàm được cung cấp. Trong trường hợp này, các
  hàm được cung cấp là hàm mũi tên nhận tham số `item` và trả về giá trị boolean
  cho biết liệu `item` nhỏ hơn hay lớn hơn phần tử `pivot`. Kết quả
  Các mảng `smaller` và `bigger` sau đó được nối với phần tử `pivot` ở giữa chúng bằng cách sử dụng
  toán tử trải phổ `...` và được hàm `quickSort()` trả về dưới dạng mảng đã sắp xếp. */
  const smaller = list.filter((item) => item < pivot);
  const bigger = list.filter((item) => item > pivot);
  /* Dòng mã này đang trả về một mảng đã sắp xếp bằng cách gọi đệ quy hàm `quickSort()` trên
  hai mảng con (`nhỏ hơn` và `lớn hơn`) được tạo bằng cách lọc mảng `list` ban đầu
  dựa trên việc các phần tử của chúng nhỏ hơn hay lớn hơn phần tử `pivot`. sự lây lan
  toán tử `...` được sử dụng để nối mảng `nhỏ hơn` đã sắp xếp, phần tử `pivot` và
  đã sắp xếp mảng `lớn hơn` thành một mảng duy nhất. */
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
/* Đoạn mã đang tạo một mảng `array` với 8 phần tử và sau đó sắp xếp nó bằng công cụ tích hợp
Phương thức `sort()` với chức năng gọi lại sắp xếp các phần tử theo thứ tự tăng dần. sắp xếp
mảng sau đó được ghi vào bàn điều khiển. Đoạn mã sau đó gọi hàm `quickSort()` với
`mảng` ban đầu làm đối số và ghi nhật ký mảng đã sắp xếp do hàm trả về vào bảng điều khiển.
Hàm `quickSort()` triển khai thuật toán sắp xếp nhanh để sắp xếp mảng theo thứ tự tăng dần. */
const array = [3, 7, 9, 0, 1, 5, 4, 2];
// const sortedArray = [...array].sort((a, b) => a - b);
// console.log(sortedArray);
console.log(quickSort(array));

// 17.6. linearSearch:
// -> Dựa trên mảng chưa được xắp xếp
// arr [1,2,3,4,5,6,7,8,9]
// Tìm ra
// value = 5
// index = ? -> 4
/**
 * Hàm thực hiện tìm kiếm tuyến tính trên mảng để tìm chỉ số của một giá trị cho trước.
 * @param arr - một mảng các giá trị để tìm kiếm
 * @param value - Tham số value trong hàm linearSearch là giá trị mà chúng ta đang tìm kiếm
 * cho trong mảng. Hàm sẽ trả về chỉ số của lần xuất hiện đầu tiên của giá trị này trong
 * mảng.
 * @trả về chỉ mục của lần xuất hiện đầu tiên của tham số `value` trong tham số `arr`. Nếu
 * Không tìm thấy `giá trị` trong `mảng`, hàm sẽ trả về `không xác định`.
 */
function linearSearch(arr, value) {
  let index;
  /* Đoạn mã trên đang sử dụng vòng lặp for để lặp qua một mảng có tên `arr`. Nó kiểm tra nếu
  phần tử hiện tại trong mảng bằng một biến có tên `giá trị`. Nếu có, nó đặt một biến
  được gọi là `index` cho chỉ mục hiện tại của phần tử trong mảng. */

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) index = i;
  }
  return index;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // -> 5 = value.

// 17.7. binarySearch: tìm kiếm nhị phân
// -> Dựa trên mảng đã được xắp xếp.
// arr [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]
// low = 0; high = arr.length - 1; value= 37
// mid = 23; value = 37 -> 37 > 23
// [29,31,37,41,43,47,53,59]
// value = 37; mid = 41 -> 41 > 37
// [29,31,37]
// mid = 31, value = 37
// value = 37 -> found
/**
 * Hàm thực hiện tìm kiếm nhị phân trên danh sách đã sắp xếp để tìm chỉ mục của một mục nhất định.
 * Danh sách @param - [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
 * @param item - 37 (giá trị chúng tôi đang tìm kiếm trong danh sách)
 * @returns Chỉ số của phần tử 37 trong mảng đã cho [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41,
 *43, 47, 53, 59].
 */
function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1; // 15-10
  while (low <= high) {
    // 8 < 15
    // 8 < 11
    // 9 < 11
    const midIndex = Math.floor((low + high) / 2); // 7-11-9-10
    const midValue = list[midIndex]; // 23-41-31-37
    if (midValue === item) return midIndex;

    if (midValue > item) {
      // 23 < 37
      // 41 > 37
      high = midIndex - 1;
    } else {
      // 31 < 37
      low = midIndex + 1; // 8-9
    }
  }
  return null;
}
console.log(
  binarySearch([1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59], 37)
);

// 17.8. interpolationSearch:
/**
 * Hàm thực hiện tìm kiếm nội suy trên một danh sách cho trước để tìm một mục xác định.
 * Danh sách @param - một mảng các số được sắp xếp theo thứ tự tăng dần
 * @param item - Mục chúng tôi đang tìm kiếm trong danh sách. Trong trường hợp này, nó là số 37.
 * @returns Chỉ mục của mục được tìm kiếm (37) trong danh sách đã cho ([1, 3, 5, 7, 11, 13, 19, 23, 29, 31,
 * 37, 41, 43, 47, 53, 59]). Trong trường hợp này, đầu ra sẽ là 10, là chỉ số của 37 trong
 */
function interpolationSearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const midIndex =
      low +
      Math.floor(
        ((high - low) * (item - list[low])) / (list[high] - list[low])
      );
    const midValue = list[midIndex];
    if (midValue === item) return midIndex;

    if (midValue > item) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return null;
}
console.log(
  interpolationSearch(
    [1, 3, 5, 7, 11, 13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59],
    37
  )
);
// https://medium.com/@smellycode/demystifying-interpolation-formula-for-interpolation-search-211780c43269
