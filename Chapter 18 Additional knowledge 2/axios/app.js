//axios: thư viện hỗ trợ gọi API
// http://localhost:3456/posts
/**
 * Post
 * id: 1
 * title: 'This is example of title'
 * description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi repudiandae, animi nesciunt recusandae cumque perferendis corporis facilis amet a tenetur aliquam vel ipsa optio facere saepe nobis ea quasi!'
 * author: 'evondev'
 */

// getPost
// => return list các bài post
// => chỉ quan tâm tới cái propertise data ở trong promise
/**
 * Chức năng lấy dữ liệu bài viết từ máy chủ sử dụng thư viện Axios trong JavaScript.
 */
async function getPosts() {
  // Dùng với asyn await
  //   try {
  //     const response = await axios.get("http://localhost:3000/posts");
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  axios
    .get("http://localhost:3000/posts")
    .then((reponse) => {
      console.log(reponse.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getPosts();

/**
 * Chức năng thêm bài đăng mới vào máy chủ bằng Axios.
 * @param post - Tham số `post` là đối tượng chứa các thuộc tính `title`, `description`,
 * và `tác giả`. Các thuộc tính này đại diện cho dữ liệu sẽ được gửi trong phần thân yêu cầu khi thực hiện
 * yêu cầu POST tới URL đã chỉ định.
 * @returns Hàm `addPost` đang trả về một lời hứa giải quyết đối tượng phản hồi được trả về
 * bằng phương thức `axios.post`. Tuy nhiên, bản thân hàm không có câu lệnh trả về nên nó
 * sẽ trả về `không xác định` theo mặc định.
 */
function addPost(post) {
  return axios
    .post("http://localhost:3000/posts", {
      title: post.title,
      description: post.description,
      author: post.author,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// addPost({
//   title: "Frontend Developer",
//   description: "Description",
//   author: "John",
// });

// Dựa vào id để update
// Khi update sẽ có hai cái đó là put and path
// put -> thay thế luôn trường ở trong database.
// patch -> thay thế những cái mà mình update
/**
 * Chức năng cập nhật bài đăng với tiêu đề và tác giả mới bằng Axios.
 * @param postId - postId là tham số đại diện cho ID của bài đăng cần được cập nhật.
 * Nó được sử dụng trong URL để chỉ định bài đăng nào sẽ cập nhật.
 */
function updatePost(postId) {
  axios
    .patch(`http://localhost:3000/posts/${postId}`, {
      title: "How to become frontend developer",
      author: "Kent",
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// updatePost(1);

// Xoá dựa vào id
/**
 * Chức năng xóa bài đăng có ID cụ thể bằng Axios trong JavaScript.
 * @param postId - postId là tham số đại diện cho mã định danh duy nhất của bài đăng cần
 * bị xóa. Hàm sử dụng Axios để gửi yêu cầu XÓA tới máy chủ tại URL đã chỉ định với
 * postId làm tham số. Nếu yêu cầu thành công, hàm sẽ ghi dữ liệu phản hồi vào
 * bảng điều khiển. Nếu đó là
 */
function deletePost(postId) {
  axios
    .delete(`http://localhost:3000/posts/${postId}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// deletePost(2);

// Lấy dữ liệu song song
/**
 * Hàm lấy dữ liệu từ hai điểm cuối khác nhau và ghi lại kết quả.
 */
async function getAllData() {
  const data = await axios.all([
    axios.get("http://localhost:3000/posts"),
    axios.get("http://localhost:3000/courses"),
  ]);
  const [posts, courses] = data;
  console.log("getAllData ~ courses", courses);
  console.log("getAllData ~ posts", posts);
}
getAllData();
