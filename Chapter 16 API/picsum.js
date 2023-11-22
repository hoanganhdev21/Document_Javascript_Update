// ?page=2&limit=100
// -> sau 1 endpoint sẽ có dấu ? sau dấu chấm hỏi sẽ có param mà chúng ta truyền lên
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
/* `loadmore.style.display = "none";` đang thiết lập thuộc tính CSS `display` của phần tử `loadmore`
thành `none`, có nghĩa là phần tử sẽ không được hiển thị trên trang web. Xong rồi
ban đầu để ẩn nút "Tải thêm" cho đến khi có nhiều hình ảnh hơn để tải. */
loadmore.style.display = "none";
/* `let page = 1;` đang khởi tạo biến `page` với giá trị `1`. Biến này được sử dụng để giữ
theo dõi số trang hiện tại khi tìm nạp hình ảnh từ API Ảnh Picsum. Theo mặc định, các
số trang ban đầu được đặt thành `1`. */
let page = 1;
/* `const limit = 10;` đang đặt số lượng hình ảnh tối đa được trả về trong danh sách khi tìm nạp
hình ảnh từ API ảnh Picsum. Giá trị của `giới hạn` được đặt thành `10` trong mã này, nhưng nó có thể
thay đổi thành bất kỳ số nào khác. */
const limit = 10;
/* `const endpoint` là một biến cố định lưu trữ điểm cuối URL để tìm nạp danh sách hình ảnh
từ API Ảnh của Picsum. Tham số `giới hạn` trong URL chỉ định số lượng hình ảnh tối đa
được trả về trong danh sách. Giá trị của `giới hạn` được đặt thành `10` trong mã này, nhưng nó có thể được thay đổi
đến bất kỳ số nào khác. */
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
{
  /* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
}
/**
 * Hàm tạo mẫu HTML cho hình ảnh có URL nhất định và nối nó vào vùng chứa
 * yếu tố.
 * @param url - URL của hình ảnh sẽ được sử dụng để tạo mẫu HTML để hiển thị
 * hình ảnh trên một trang web.
 */
function imageTemplate(url) {
  const template = `<div class="image-item">
        <img src="${url}" alt="" />
      </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}

/**
 * Chức năng này tìm nạp hình ảnh từ điểm cuối API và hiển thị chúng trên trang web.
 * @param [page=1] - Tham số trang được sử dụng để chỉ định số trang của phản hồi API cần tìm nạp
 * hình ảnh từ. Nó được sử dụng để phân trang thông qua các kết quả của điểm cuối API.
 */
async function fetchImages(page = 1) {
  loading.style.display = "block";
  loadmore.style.display = "none";
  /* `const response = await fetch(`&page=`);` đang gửi yêu cầu tới Picsum
  Điểm cuối API Ảnh có tham số truy vấn `trang` chỉ định số trang của API
  phản hồi để lấy hình ảnh từ. Phương thức `fetch()` là một phương thức tích hợp sẵn trong JavaScript để gửi
  một yêu cầu tới một URL được chỉ định và trả về một lời hứa giải quyết đối tượng `Response`
  đại diện cho câu trả lời cho yêu cầu đó. Từ khóa `await` được sử dụng để chờ phản hồi cho
  được trả về trước khi tiếp tục thực thi mã. Đối tượng `Response` chứa
  thông tin về phản hồi, bao gồm mã trạng thái, tiêu đề và nội dung. Trong trường hợp này, các
  nội dung phản hồi dự kiến ​​sẽ ở định dạng JSON, sau đó được phân tích cú pháp bằng phương thức `json()` để
  trả về một đối tượng JavaScript. */
  const response = await fetch(`${endpoint}&page=${page}`);
  /* `const images = await response.json();` đang gửi yêu cầu đến điểm cuối API và chờ
  phản hồi sẽ được trả về ở định dạng JSON. Phương thức `json()` là một phương thức tích hợp sẵn trong
  Đối tượng `Response` phân tích nội dung phản hồi dưới dạng JSON và trả về một đối tượng JavaScript. Các
  đối tượng được trả về sau đó được gán cho biến hằng số `hình ảnh`. */
  const images = await response.json();
  /* Khối mã này đang kiểm tra xem mảng `hình ảnh` được trả về từ lệnh gọi API có trống không và
  một mảng thực tế. Nếu cả hai điều kiện đều đúng, nó sẽ ẩn con quay tải bằng cách đặt
  Thuộc tính `display` của phần tử `đang tải` thành `none`, hiển thị nút "Tải thêm" bằng cách đặt
  Thuộc tính `display` của phần tử `loadmore` thành `block` và lặp qua từng mục trong
  Mảng `hình ảnh` bằng cách sử dụng phương thức `forEach` để tạo mẫu HTML cho mỗi hình ảnh và nối thêm nó
  đến phần tử vùng chứa `imageList` bằng cách sử dụng hàm `imageTemplate`. */
  if (images.length > 0 && Array.isArray(images)) {
    loading.style.display = "none";
    loadmore.style.display = "block";
    /* `images.forEach((item) => { imageTemplate(item.download_url); });` đang lặp qua từng
    mục trong mảng `images` bằng cách sử dụng phương thức `forEach` và gọi hàm `imageTemplate`
    cho từng mục có thuộc tính `download_url` của mục đó làm đối số. Điều này tạo ra một HTML
    mẫu cho từng hình ảnh và nối nó vào phần tử bộ chứa `imageList`. */
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
/**
 * Chức năng tăng số trang và tìm nạp nhiều hình ảnh hơn một cách không đồng bộ.
 */
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
/* `loadmore.addEventListener("click", handleLoadMore);` đang thêm một trình lắng nghe sự kiện vào `loadmore`
yếu tố. Nó lắng nghe một sự kiện nhấp chuột trên phần tử và khi sự kiện nhấp chuột xảy ra, nó sẽ gọi
chức năng `xử lýLoadMore`. Điều này cho phép người dùng nhấp vào nút "Tải thêm" và kích hoạt
Chức năng `handleLoadMore` để tải nhiều hình ảnh hơn một cách không đồng bộ. */
loadmore.addEventListener("click", handleLoadMore);
/* Hàm `fetchImages();` chịu trách nhiệm tìm nạp và hiển thị hình ảnh từ API Picsum.
Nó được gọi mà không có bất kỳ đối số nào, có nghĩa là nó sẽ sử dụng giá trị mặc định là `page = 1`. Cái này
chức năng gửi yêu cầu đến điểm cuối API với số trang đã chỉ định và truy xuất danh sách
hình ảnh. Sau đó, nó tạo các mẫu HTML cho từng hình ảnh và nối chúng vào `imageList`
vùng chứa trên trang web. */
fetchImages();
