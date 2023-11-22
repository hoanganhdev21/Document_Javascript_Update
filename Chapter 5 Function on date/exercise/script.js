// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// 2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó

// 1:
/**
 * Hàm `getAge` tính toán tuổi dựa trên năm đầu vào và trả về nó.
 * @param [year=0] - Tham số `year` biểu thị năm sinh của một người.
 * @returns Hàm `getAge` trả về tuổi được tính dựa trên năm đầu vào.
 */
function getAge(year = 0) {
  /* Dòng `if (typeof year !== "number") return 0;` đang kiểm tra xem tham số `year` có phải là một
  con số. Nếu `năm` không phải là một số, điều đó có nghĩa là đầu vào không hợp lệ, vì vậy hàm sẽ trả về
  0. Đây là bước xác thực để đảm bảo rằng đầu vào là một số hợp lệ trước khi tiếp tục với
  phép tính. */
  if (typeof year !== "number") return 0;
  // currentYear - year(năm hiện tại - năm sinh)
  /* Dòng `const now = new Date();` tạo một đối tượng Date mới và gán nó cho biến `now`.
  Đối tượng Date này đại diện cho ngày và giờ hiện tại. */
  const now = new Date();
  const currentYear = now.getFullYear(); // 2021
  return currentYear - year;
}
const yourAge = getAge(2001);
// const yourAge = getAge("2001");
console.log(`Năm nay bạn ${yourAge} tuổi`);

// 2:
/**
 * Chức năng đếm ngược diễn ra trong một số phút và đếm ngược từ số phút đó đến
 * 0, in từng giây lên bàn điều khiển cho đến khi hết thời gian.
 * @param [minutes=1] - Tham số `minutes` là số phút cho đồng hồ đếm ngược. Qua
 * mặc định, nó được đặt thành 1 phút.
 */
function countdown(minutes = 1) {
  let seconds = minutes * 60; // 60 giây => variable đổi sang giây.
  let counter = 0;
  const timer = setInterval(function () {
    counter = counter + 1; // => Nó sẽ bằng chính nó và cộng thêm 1.
    // counter += 1; // => Tương tự như trên cộng chính nó thêm với 1.
    console.log(counter);
    if (counter === seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
// countdown(1);
// counter = 0
// 1 2 3 4 5 6

// 3:
/**
 * Hàm tính toán và trả về thời gian đã trôi qua kể từ một ngày nhất định theo năm, tháng, tuần,
 * ngày, giờ, phút hoặc giây.
 * @param date - Tham số `date` là ngày và giờ mà bạn muốn tính thời gian kể từ đó.
 * Nó phải ở định dạng ngày hợp lệ có thể được phân tích cú pháp bởi hàm tạo `Date`, chẳng hạn như một chuỗi
 * ở định dạng ISO 8601 hoặc dấu thời gian.
 * @returns Hàm không trả về giá trị một cách rõ ràng. Nó chỉ ghi lại thời gian kể từ ngày nhất định
 * trong bảng điều khiển.
 */
function timeSince(date) {
  // current Time - date (lấy thời gian hiện tại - date)
  /* Dòng `const now = new Date();` tạo một đối tượng Date mới và gán nó cho biến `now`.
  Đối tượng Date này đại diện cho ngày và giờ hiện tại. */
  const now = new Date();
  /* Dòng `const yourDate = new Date(date);` tạo một đối tượng Date mới dựa trên đầu vào `date`.
 Điều này cho phép chúng tôi thực hiện các tính toán và so sánh với ngày và giờ hiện tại. */
  const yourDate = new Date(date);
  /* Dòng `const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);` tính toán
 chênh lệch tính bằng giây giữa thời gian hiện tại (`now`) và ngày đã chỉ định (`yourDate`). */
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // in ra số giây
  if (seconds < 0) {
    alert("your time is invalid");
    return;
  }
  let timer = seconds / 31536000; // 0.00002342
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400; // 0.0023424
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800; // 0.023423
  if (timer > 1) {
    console.log(`${Math.floor(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400; // 0.9
  if (timer > 1) {
    console.log(`${Math.floor(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600; // 1.333
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giây trước`);
  }
  return;
}
// `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`
// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
timeSince("Sun May 16 2021 00:30:10 GMT+0700 (Indochina Time)");
