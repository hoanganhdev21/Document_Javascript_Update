// Sẽ thấy khi sử dụng những thư viện animate khi scroll thì cái hình mới hiện ra
if ("IntersectionObserver" in window) {
  // const boxed = document.querySelector(".boxed");
  // function callback(entries) {
  //   const entry = entries[0];
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.target);
  //     entry.target.style.backgroundColor = "red";
  //   }
  // }
  // const options = {
  //   root: null,
  //   threshold: 0.5,
  //   rootMargin: "0px",
  // };
  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(boxed);
  /* `const options` đang tạo một đối tượng đặt các tùy chọn cho `IntersectionObserver`. TRONG
  trường hợp này, thuộc tính `threshold` được đặt thành `0,5`, có nghĩa là người quan sát sẽ kích hoạt
  khi phần tử đích hiển thị 50% trong chế độ xem. Điều này có thể được điều chỉnh thành một giá trị khác
  tùy thuộc vào hành vi mong muốn. */
  const options = {
    threshold: 0.5,
  };
  /* Mã này đang tạo một đối tượng `IntersectionObserver` mới và đặt nó vào biến
  `người quan sát`. Trình quan sát được thiết lập để theo dõi khi các phần tử trên trang giao với
  viewport và khi chúng thực hiện, nó sẽ thực thi chức năng gọi lại được cung cấp làm đối số đầu tiên. */
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /* Khối mã này đang kiểm tra xem phần tử được quan sát có giao nhau với khung nhìn hay không bằng cách sử dụng
      thuộc tính `isIntersecting` của đối tượng `entry`. Nếu có, nó đặt thuộc tính `src` của
      phần tử thành giá trị của thuộc tính `data-src` của nó, thuộc tính này thường có độ phân giải cao hơn
      hình ảnh không được tải ban đầu để cải thiện hiệu suất trang. Sau đó, nó gọi
      `unobserve()` trên đối tượng `observer` để ngừng quan sát phần tử, vì nó có
      đã được tải. */
      if (entry.isIntersecting) {
        // Handle logic here
        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target)
        observer.unobserve(entry.target);
      }
    });
  }, options);
  /* Mã này đang sử dụng phương thức `document.querySelectorAll()` để chọn tất cả các phần tử `<img>` trên
  trang. Sau đó, nó đang sử dụng phương thức `forEach()` để lặp qua từng phần tử `<img>` này
  và gọi phương thức `observer.observe()` trên mỗi phương thức đó. Đây là thiết lập một
  IntersectionObserver để theo dõi khi nào mỗi phần tử `<img>` đi vào khung nhìn và khi đó,
  nó sẽ tải hình ảnh bằng cách đặt thuộc tính `src` thành giá trị của thuộc tính `data-src`.
  Kỹ thuật này thường được sử dụng để tải chậm hình ảnh nhằm cải thiện hiệu suất trang. */
  const images = document.querySelectorAll("img");
  images.forEach((img) => observer.observe(img));
}
