// https://icanhazdadjoke.com/ -> đây là 1 API free chúng ta có thể sử dụng nó
// joke -> có nghĩa là những câu nói hài hước khi mà mỗi lafn chúng ta gọi thì nó ra một câu hài hước
const jokeHeding = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
/**
 * Chức năng này truy xuất một trò đùa từ một API ở định dạng JSON.
 * @returns Hàm `getJoke()` đang trả về một Lời hứa giải quyết dữ liệu JSON được tìm nạp từ
 * điểm cuối được chỉ định.
 */
async function getJoke() {
  /* `const response = await fetch(endpoint, {headers: {Accept: "application/json"}});` đang tạo một
  yêu cầu tới URL `điểm cuối` đã chỉ định bằng cách sử dụng phương thức `tìm nạp()`. Đối tượng `tiêu đề` là
  chỉ định rằng phản hồi phải ở định dạng JSON bằng cách đặt tiêu đề `Chấp nhận` thành
  `"ứng dụng/json"`. Từ khóa `await` được sử dụng để đợi phản hồi được trả về trước khi
  tiếp tục với việc thực thi mã. Sau đó, phản hồi được gán cho biến `response`. */
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
    // headers thông tin mà chúng muốn gửi lên server để server nhận những thông tin đó để nó trả về cho chúng ta 1 cách phù hợp.
  });
  /* `const data = await response.json();` đang chuyển đổi phản hồi từ API sang định dạng JSON và
  gán nó cho biến `data`. Điều này cho phép chúng tôi dễ dàng truy cập dữ liệu do API trả về
  trong một định dạng có cấu trúc. */
  const data = await response.json();
  return data;
}
/**
 * Chức năng này xử lý một sự kiện nhấp chuột, truy xuất một trò đùa không đồng bộ, cập nhật tiêu đề trò đùa với
 * trò đùa đã truy xuất và xóa lớp đang tải khỏi trình bao bọc trò đùa.
 */
async function handleClick() {
  jokeWrapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeding.textContent = data.joke;
  jokeWrapper.classList.remove("is-loading");
}
/* `jokeButton.addEventListener("click", handleClick);` đang thêm một trình lắng nghe sự kiện vào `jokeButton`
yếu tố. Nó lắng nghe một sự kiện bấm vào nút và khi sự kiện xảy ra, nó gọi
chức năng `handleClick`. Điều này cho phép chức năng `handleClick` được thực thi bất cứ khi nào nút được
nhấp vào. */
jokeButton.addEventListener("click", handleClick);
