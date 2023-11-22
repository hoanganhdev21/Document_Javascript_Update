1: Hiện thực hoá OOP trong JS như thế nào?
OOP là lập trình hướng đối tượng, từ đối tượng sẽ khởi tạo ra nhiều thực thể, mỗi thực thể sẽ sử dụng được các hành vi và thuộc tính được định nghĩa bởi đối tượng
OOP có 4 tính chất chính:

- Tính trìu tượng: Mọi thứ hoạt động trong đối tượng như một hộp đen khi sử dụng thực thể của đối tượng chúng ta chỉ thấy được đầu vào và đầu ra còn lại xử lý bên trong như thế nào chúng ta không quan tâm.
- Tính đóng gói: chúng ta sẽ đóng gói tất cả các thuộc tính và hành vi của đối tượng thành 1 class với class này chúng ta chỉ cho thấy và sử dụng những gì chúng ta muốn cho thấy từ đó bảo vệ được thực thể của đối tượng trước những thay đổi không mong muốn trực tiếp từ bên ngoài.
- Tính kế thừa: giúp đối tượng tiến hoá thành những đối tượng chuyên biệt hơn nhưng không cần viết lại toàn bộ đối tượng chuyên biệt đó và cuối cùng là
- Tính đa hình với hai thuật ngữ: overiding và overloading với overiding thì chúng ta ghi đè hành vi của đối tượng chuyên biệt tên hành vi gốc của đối tượng được kế thừa. Với overloading thì chúng ta sẽ định nghĩa nhiều hành vi cùng tên nhưng sẽ có các đầu vào khác nhau dựa vào sự khác nhau của đầu vào mà đối tượng sẽ chọn đúng hành vi để xử lý tiếp.

* Làm sao để hiện thực OOP trong JS?
  có 2 các là áp dụng prototype và class

- Với Tính trừu tượng: ta khai báo đối tượng người với hành vi di chuyển chỗ ở không cần biết bên trong hành vi này xử lý như thế nào miễn sao thực thể của đối tượng này di chuyển sống ở việt nam thì vui còn lại thì bình thường
- Tính đóng gói: ta sẽ di chuyển sự vui buồn vào khu vực "riêng tư" khi đó chỉ có thể thay đổi niềm vui bằng hành vi cụ thể chứ không còn có thể thay đổi trực tiếp từ môi trường bên ngoài
- Tính kế thừa: ta sẽ khai báo đối tượng người việt nam chuyên biệt có thêm thuộc tính thành phố đối tượng người việt nam này sẽ thừa hưởng mọi hành vi công khai của đối tượng người
- Tính đa hình: ta có thể overiding người việt nam khi sống ở việt nam sẽ rất vui còn lại sẽ rất bình thường và overloading hành vi di chuyển chỗ ở kèm theo chi tiết thành phố sẽ đến

2: Tại sao Js chạy đơn luồng nhưng vẫn xử lý bất đồng bộ được?
=> Câu trả lời nằm ở từ khoá event loop và task queue các câu lệnh vẫn được xử lý từng lệnh 1 chứ không phải xử lý song song tuy nhiên điểm khác biệt ở chỗ sẽ có lệnh được xử lý liền trong stack và có lệnh sẽ được cho vào stack queue đợi xử lý cho đến khi stack đã trống để sẵn sàng xử lý lệnh tiếp theo khi đó ta có cảm giác các lệnh được xử lý bất đồng bộ bằng đa luồng
task queue được chia làm hai loại: là microtask queue vả macrotask queue hay còn gọi là callback queue nếu có nhiều task đồng thời trong microtask và macrotask queue thì các task trong microtask sẽ được ưu tiên đưa vào stack xử lý trước cho đến khi hết stack trong macrotask thì các task mới được đưa vào stack để xử lý.

3: Nêu những cách áp dụng JS vào HTML
=> inline, internal, external

4: null và undefined khác nhau như thế nào?
=> Biến chưa được gán giá trị sẽ là undefined. Null là giá trị rỗng được gán vào biến.

5: Phân biệt giữa localStorage, sesstion storage và cookie?
=>

- localstorage chứa những giá trị có kích thước lớn trên lộ nhớ thiết bị, giúp giảm thời gian load trang web, không bị xoá bỏ khi tắt trình duyệt.
- sessionstorage là những dữ liệu lưu trữ ngắn, sẽ tiêu biến sau 1 phiên sử dụng trình duyệt.
- cookie là những dữ liệu siêu nhỏ(<4kb>) trong trình duyệt, thường được dùng để lưu trữ cài đặt người dùng trên những trang web bất kỳ.

6: Những cách khai báo biến trong JS?

- var là cách cơ bản nhất
- let thường được sử dụng khi biến có sự thay đổi giá trị liên tục như trong vòng lặp loop
- const khai báo biến không thể gán giá trị mới.
- const và let khai báo trong block scope.

7: Escape character là gì?
=> khi viết code đôi khi có từ chứa dấu ' cần hiển thị rên trang web như " I'am good boy "
Lúc nnayf ta viết như sau:
document.write("I\'am good boy")

8: Delete là gì trong JS?
Xoá thuộc tính, xoá giá trị của biến.
vd var student = {age: 20, batch:"abc"}
delete student.age.

9:Variable tying là gì?
Là khi biến được gán giá trị số, và rồi lại được gán giá trị sâu chuỗi.
i = 10;
i = "ten";

10: Nêu kiểu dữ liệu của biến trong JS?
Kiểu dữ liệu của các biến trong JS là kiểu đối tượng (object data type)

11: isNaN làm gì trong JS?
=> Hàm isNaN trả về giá trị boolean(true/false) khi giá trị được kiểm tra là số hay không.

12: Null là gì?
=> là giá trị rỗng, nghĩa là khi biến được khai báo không mang bất kỳ giá trị số, boolean, string,...nào cả.
=> Null là giá trị cho biến đã được khai báo, còn với biến không được khai báo(undefined variable) thì không thể mang giá trị này.

13: Trong JS có một tính năng gọi là prototype. Nó là gì?
=> Là cách JS thực hiện kế thừa và chia sẻ các thuộc tính và phương thức giữa các đối tượng. Khi bạn truy cập vào một thuộc tính hoặc một phương thức trên 1 đối tượng, JS trước tiên tìm kiếm nó trong đối tượng đó. Nếu không tìm thấy nó tiếp tục tìm kiếm trong prototype của đối tượng. Quá trình tìm kiếm này sẽ tiếp tục cho tới khi nó tìm thấy thuộc tính hoặc phương thức cần truy cập hoạc đã duyệt qua toàn bộ chuỗi các prototype liên kết.

14:

- Giải thích closure?
- Higher Order Function là gì?
- Kể tên các tính năng mới của ES6, ES7
- Sự khác nhau giữa function call, apply, bind?
- Giải thích sự kiện event bubbling, (event)propagation và event capturing?
- Callback hell là gì? Làm cách gì để giải quyết vấn đề đó?
- Promise là gì? Làm cách nào để gọi 1 promise?
- Arrow funcrion là gì? Sự khác nhau giữa arrow function và regular function
- Scope
- Native method
- Hoisting
- This keyword

CÁC SAI LẦM KHI PHỎNG VẤN FRONT-END
1: Liệt kê những thứ không liên quan đến công việc(đi tình nguyện, sự kiện ở trường...)
=> Hãy chỉ nói đến những dự án liên quan đến vị trí đang apply.
2: Quá tập trung vào công nghệ
=> Thay vào đó hãy chỉ ra

- Vì sao sử dụng nó? Giải quyết vấn đề gì?
- Tối ưu được performance như thế nào?
- Khả năng mở rộng của nó ra sao?
  3: Nói không với những phần kiến thức mà mình không nắm chắc
  => Luôn thể hiện cho nhà tuyển dụng thấy tính thần ham học hỏi.
