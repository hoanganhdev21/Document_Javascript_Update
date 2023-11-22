// API là gì
// Application Programming Interface
// => API nó giống như 1 server có data và trả về cho chúng ta.
// API (Giao diện lập trình ứng dụng) là một tập hợp các tính năng và quy tắc tồn tại bên trong chương trình phần mềm (ứng dụng) cho phép tương tác với nó thông qua phần mềm - trái ngược với giao diện người dùng của con người. API có thể được coi là một hợp đồng đơn giản (giao diện) giữa ứng dụng cung cấp nó và các mục khác, chẳng hạn như phần mềm hoặc phần cứng của bên thứ ba.

// https://api.github.com/users/evondev -> API của github và truyền vào là username là evondev.
// => Lấy data này để hiển thị ra bên ngoài giao diện hocajw thực hiện 1 chức năng nào đó.
// JSON.parse(data) -> data trả về dưới dạng JSON.

// VD: Sử dụng API github để lấy thông tin của user.
const endpoint = "https://api.github.com/users/evondev"; // -> endpoint là 1 trong những đường dẫn của API.

// fetch: -> có sẵn ở trong JS dùng để fetch data từ endpoint nó sẽ trả về cho chúng ta 1 promise và sau đó chúngta có thể sử dụng then và catch để bắt lỗi.
// fetch basic
// const promise = fetch(endpoint);
// console.log(promise);
// promise
//   .then((respone) => {
//     return respone.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.type);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch
// refactor thành function để chúng ta có thể truyền param vào thay username không phải là evondev mà là một tên khác.
// => chúng ta chỉ cần quan tâm respone và json(data nó sẽ nàm ở trong đây).
const endpoint2 = "https://api.github.com/users"; // -> endpoint là 1 trong những đường dẫn của API.
const userEl = document.querySelector(".username");
/**
 * Hàm hiển thị tên người dùng của người dùng được tìm nạp từ điểm cuối API.
 * Tên người dùng @param - Tham số tên người dùng là một chuỗi đại diện cho tên người dùng của người dùng trên một
 * trang web hoặc ứng dụng. Nó được sử dụng trong yêu cầu tìm nạp để truy xuất dữ liệu về người dùng từ API.
 */
async function displayUser(username) {
  userEl.textContent = "Loading..."; // -> Trước khi mà fetch chúng ta cho loading hiện ra trước
  /* `const promise = await fetch(`/`);` đang thực hiện yêu cầu tìm nạp tới API
  điểm cuối với tham số tên người dùng được chỉ định. Từ khóa `await` được sử dụng để đợi
  phản hồi từ API trước khi tiếp tục thực thi mã. Phản hồi được trả lại
  như một lời hứa, được gán cho hằng số `lời hứa`. */
  const promise = await fetch(`${endpoint2}/${username}`);
  console.log(promise);
  /* `const data = await promise.json();` đang đợi phản hồi từ điểm cuối API
  được trả về dưới dạng đối tượng JSON. Nó đang sử dụng phương thức `json()` để phân tích dữ liệu phản hồi dưới dạng JSON và
  gán nó cho biến `data`. Điều này cho phép chúng tôi truy cập và sử dụng dữ liệu trong mã của chúng tôi. */
  const data = await promise.json(); // -> cái này tương ứng với đoạn ở dưới
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.type);
  //   })
  /* `userEl.textContent = `${data.login}`;` đang đặt nội dung văn bản của phần tử HTML với lớp
  "tên người dùng" thành tên đăng nhập của người dùng được tìm nạp từ API. Đây là một cách để hiển thị các
  tên người dùng trên trang web. */
  userEl.textContent = `${data.login}`;
}
/**
 * Hàm ghi lại thông báo lỗi và cập nhật nội dung văn bản của phần tử người dùng.
 */
function handleError() {
  console.log("Something wrong with your api");
  userEl.textContent = "No data found";
}
// console.log(displayUser("evondev"));
/* `displayUser("").catch(handleError)` đang gọi hàm `displayUser` với một chuỗi rỗng là
tham số `tên người dùng`, sẽ dẫn đến lỗi khi đưa ra yêu cầu tìm nạp.
Phương thức `catch` được sử dụng để xử lý bất kỳ lỗi nào xảy ra trong quá trình thực thi `displayUser`
và nó gọi hàm `handleError` để ghi lại thông báo lỗi và cập nhật văn bản
nội dung của phần tử `userEl` thành "Không tìm thấy dữ liệu". */
displayUser("").catch(handleError);
