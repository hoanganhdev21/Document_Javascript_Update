// function addPost(title, author) {
//   fetch("http://localhost:3000/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       // body: JSON.stringify data chúng ta sẽ truyền vào
//       title,
//       author,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// const formPost = document.querySelector(".form-post");
// formPost.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // Lấy giá trị trong form.
//   const title = this.elements["title"].value;
//   const author = this.elements["author"].value;
//   //   console.log(title, author);
//   addPost(title, author);
// });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Placeholder về course
// const {image, title, author, rating...addPost.} = course;
const endpoint = "http://localhost:3456/courses";
const courseList = document.querySelector(".course-list");
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
const filterInput = document.querySelector(".filter");
let updateId = null;

// git clone
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// TÌM KIẾM
// Khi chúng ta gõ vào input nó sẽ tìm ra những từ khoá ví dụ như tiêu đề thì nó chỉ lấy ra những sản phẩm có từ khoá đó.
/* Mã này đang thêm trình xử lý sự kiện vào phần tử `filterInput` cho sự kiện "keydown". Khi mà
sự kiện được kích hoạt, nó gọi hàm `debounceFn` với hàm gọi lại ghi lại giá trị
của trường đầu vào vào bảng điều khiển và đặt biến `path` thành giá trị `endpoint`. Nếu đầu vào
trường không trống, nó cập nhật biến `path` để bao gồm tham số truy vấn tìm kiếm
các khóa học có tiêu đề bao gồm giá trị đầu vào. Cuối cùng, nó gọi hàm `getCourses` với
giá trị `path` được cập nhật để tìm nạp và hiển thị các khóa học đã lọc. Hàm `debounceFn` được sử dụng
để giới hạn tần suất của chức năng gọi lại trình lắng nghe sự kiện gọi một lần cứ sau 1000 mili giây
để ngăn chặn các yêu cầu API quá mức. */
filterInput.addEventListener(
  "keydown",
  debounceFn(function (e) {
    console.log(e.target.value);
    /* Mã này đang cập nhật biến `path` dựa trên giá trị của phần tử `filterInput`. Nếu như
    giá trị đầu vào không trống, nó cập nhật biến `path` để bao gồm tham số truy vấn
    tìm kiếm các khóa học có tiêu đề bao gồm giá trị đầu vào. Biến `path` được cập nhật này là
    sau đó được sử dụng làm điểm cuối cho hàm `getCourses` để tìm nạp và hiển thị nội dung đã lọc
    khóa học. */
    let path = endpoint;
    if (e.target.value !== "") {
      path = `${endpoint}?title_like=${e.target.value}`;
      //   ? title_like= tìm theo tiêu đề.
    }
    getCourses(path);

    //   const response = await fetch(`${endpoint}?title_like=${e.target.value}`);
    //   const data = await response.json();
    //   console.log(data);
  }, 1000)
);

async function addNewCourse({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

// Update
// Tương tự như post thay vì method là post thì sẽ là put.
// Nhưng khi update chúng ta phải biết update cho cái id nào.
async function updateCourse({
  id,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

// DELETE
// Xoá course khỏi database
// => chúng ta phải dựa vào id
async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// LẤY RA THÔNG TIN KHI UPDATE
async function getSingleCourse(id) {
  const response = await fetch(`${endpoint}/${id}`);
  const data = await response.json();
  return data;
}

// Render item trong course-list
/**
 * Hàm `renderItem` lấy một đối tượng vật phẩm và tạo mã HTML để hiển thị vật phẩm
 * thông tin trong một danh sách khóa học.
 * @param item - Tham số item là một đối tượng chứa thông tin về một khóa học, chẳng hạn như
 * tiêu đề, tác giả, hình ảnh, xếp hạng, số lượng mua và liệu đó có phải là sách bán chạy nhất hay không. Chức năng sử dụng
 * thông tin này để tự động tạo mã HTML để hiển thị khóa học trên trang web.
 */
function renderItem(item) {
  const template = `<div class="course-item">
  <div class="course-image">
    <img src="${item.image}" alt="" />
    <button class="course-edit" data-id="${
      item.id
    }"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
    <button class="course-remove" data-id="${
      item.id
    }"><i class="fa fa-times"></i></button>
  </div>
  <div class="course-content">
    <h3 class="course-title">
      ${item.title}
    </h3>
    <div class="course-author">${item.author}</div>
    <div class="course-meta">
      <div class="course-rating">Rating: ${item.rating}</div>
      <div class="course-enroll">Buy amount: ${item.buyAmount}</div>
    </div>
    ${
      item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
    }
  </div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

// LẤY RA KHOÁ HỌC.
/**
 * Hàm `getCourses` tìm nạp dữ liệu từ một điểm cuối đã chỉ định, xóa danh sách khóa học hiện có,
 * và hiển thị dữ liệu đã tìm nạp dưới dạng các mục khóa học mới.
 * @param [link] - Tham số `link` là điểm cuối URL mà dữ liệu khóa học sẽ được lấy từ đó
 * đã tìm nạp. Đây là một tham số tùy chọn và nếu không được cung cấp, nó sẽ mặc định là giá trị của
 * Biến `điểm cuối`.
 */
async function getCourses(link = endpoint) {
  const response = await fetch(link);
  const data = await response.json();
  courseList.innerHTML = ""; // => Reset rỗng cái ban đầu sau đó chúng ra mới render ra cái mới.
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}

formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  // Lấy giá trị trong form.
  //   Truyền khi đúng thứ tự
  //   const image = this.elements["image"].value;
  //   const title = this.elements["title"].value;
  //   const author = this.elements["author"].value;
  //   const rating = this.elements["rating"].value;
  //   const price = this.elements["price"].value;
  //   const bestSeller = this.elements["bestSeller"].checked;
  //   const buyAmount = this.elements["buyAmount"].value;

  // Lấy giá trị không cần đúng thứ tự
  /* Đoạn mã này đang tạo một đối tượng gọi là `course` với các thuộc tính tương ứng với các giá trị của
  các trường đầu vào trong biểu mẫu `formPost`. Toán tử `+` được sử dụng để chuyển đổi các giá trị của
  Các thuộc tính `rating`, `price` và `buyAmount` từ chuỗi thành số. Đối tượng này sau đó được thông qua
  làm đối số cho hàm `addNewCourse` hoặc `updateCourse` để thêm hoặc cập nhật khóa học trong
  cơ sở dữ liệu. */
  const course = {
    /* `title: this.elements["title"].value` đang tạo một thuộc tính gọi là `title` trong một đối tượng bằng chữ
    và gán cho nó giá trị của thuộc tính `value` của phần tử đầu vào `title` trong
    biểu mẫu `formPost`. Điều này được sử dụng để thu thập đầu vào của người dùng cho tiêu đề của một khóa học mới hoặc
    tiêu đề cập nhật của một khóa học hiện có. */
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    image: this.elements["image"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
    // + -> để chuyển sang number
  };
  console.log(updateId);
  //   addPost(image, title, author, rating, price, bestSeller, buyAmount);

  //   await addNewCourses(course); // => addPost(course) chờ thêm khoá học xong rồi mới reset thì dùng async await.

  //   Kiểm tra:
  //   Nếu có updateID thì có updateCourse object{id, ...course(...là destrucuring sang object)}, còn ngược lại thì sẽ thêm khoá học mới
  /* Mã này đang kiểm tra xem biến `updateId` có giá trị trung thực hay không. Nếu có, nó có nghĩa là
  rằng người dùng đang cập nhật một khóa học hiện có, vì vậy hàm `updateCourse` được gọi với một
  đối tượng bao gồm thuộc tính `id` được đặt thành giá trị của `updateId` và phần còn lại của
  thuộc tính lây lan từ đối tượng `course`. Nếu `updateId` là sai, điều đó có nghĩa là người dùng
  thêm một khóa học mới, vì vậy hàm `addNewCourse` được gọi với đối tượng `course`. Sau
  khóa học được thêm hoặc cập nhật, biểu mẫu được đặt lại về trạng thái ban đầu. */
  updateId
    ? await updateCourse({ id: updateId, ...course })
    : await addNewCourse(course);
  // reset vale form
  /* `this.reset();` đang đặt lại biểu mẫu về trạng thái ban đầu bằng cách xóa tất cả các trường nhập và
  đặt lại mọi giá trị mặc định hoặc các tùy chọn đã chọn. Điều này thường được sử dụng sau khi một hình thức đã được
  đã gửi để xóa biểu mẫu và chuẩn bị cho lần nhập tiếp theo. */
  this.reset();
  // Xử lý khi add sẽ hiện ra bên ngoài trình duyệt luôn mà không cần phải reload
  await getCourses(); // => Khi bấm add thì nó sẽ gọi lại getCourse
  // Sau khi update và clear form và gọi lại xong rồi luvs này mình sẽ gán lại.
  updateId = null;
  formSubmit.textContent = "Add course";
});

courseList.addEventListener("click", async function (e) {
  /* Đoạn mã này đang xử lý các sự kiện nhấp chuột trên các phần tử có lớp "course-remove" và "course-edit". Nếu như
  phần tử được nhấp có lớp "loại bỏ khóa học", nó lấy ID của khóa học tương ứng
  từ thuộc tính "data-id" của phần tử, xóa khóa học khỏi cơ sở dữ liệu bằng ID,
  và sau đó hiển thị lại danh sách các khóa học. Nếu phần tử được nhấp có lớp "chỉnh sửa khóa học", nó
  truy xuất ID của khóa học tương ứng từ thuộc tính "data-id" của phần tử,
  truy xuất thông tin về khóa học từ cơ sở dữ liệu bằng ID, sau đó pre-f */
  if (e.target.matches(".course-remove")) {
    /* `const id = +e.target.dataset.id;` đang chuyển đổi giá trị của thuộc tính `id` của đối tượng được nhấp
    phần tử thành một số bằng cách sử dụng toán tử cộng một ngôi (`+`). Giá trị `id` được lưu trữ trong
    Thuộc tính `data-id` của phần tử được nhấp, được truy cập bằng thuộc tính `dataset`. Cái này
    giá trị `id` đã chuyển đổi sau đó được sử dụng làm đối số cho `deleteCourse` hoặc `getSingleCourse`
    chức năng xóa hoặc truy xuất thông tin về một khóa học cụ thể từ cơ sở dữ liệu. */
    const id = +e.target.dataset.id;
    // console.log(e.target);
    await deleteCourse(id);
    // Sau khi xoá khoá học xong sẽ render lại.
    await getCourses();
  } else if (e.target.matches(".course-edit")) {
    const id = +e.target.dataset.id;
    // console.log(id);
    const data = await getSingleCourse(id);
    // Lấy giá trị của data lên các input tương ứng khi update.
    /* `formPost.elements["image"].value = data.image;` đang đặt giá trị cho trường nhập "hình ảnh"
    trong biểu mẫu "formPost" thành giá trị của thuộc tính "hình ảnh" của đối tượng "dữ liệu". cái này được sử dụng
    để điền trước các trường đầu vào với dữ liệu hiện có của một khóa học khi người dùng nhấp vào
    nút "chỉnh sửa" để cập nhật thông tin khóa học. */
    formPost.elements["image"].value = data.image;
    formPost.elements["title"].value = data.title;
    formPost.elements["author"].value = data.author;
    formPost.elements["rating"].value = data.rating;
    formPost.elements["price"].value = data.price;
    formPost.elements["bestSeller"].checked = data.bestSeller;
    formPost.elements["buyAmount"].value = data.buyAmount;
    formSubmit.textContent = "Update course"; // => set lại text cho button
    updateId = id; // => update lại id đó
  }
});
/* Đoạn mã trên đang gọi một hàm có tên `getCourses()`. Không rõ chức năng này làm gì
mà không có thêm bối cảnh. */
getCourses();

// json-server --watch db.json
/**
 * Course
 * image
 * title
 * author
 * rating
 * price
 * bestSeller
 * buyAmount
 */
