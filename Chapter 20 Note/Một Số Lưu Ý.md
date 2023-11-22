1: Tránh biến toàn cục, Khởi tạo biến, tránh eval()

- Tránh biến toàn cục: Giảm thiểu sử dụng các biến toàn cục. Điều này bao gồm tất cả các kiểu dữ liệu, đối tượng và chức năng. Các biến và hàm toàn cục có thể bị ghi đè bởi các tập lệnh khác. Thay vào đó hãy sử dụng các biến cục bộ và tìm hiểu cách sử dụng closure. Biến cục bộ phải được khai báo bằng từ khoá var, let or const nếu không chúng sẽ trở thành biến toàn cục.
- Khai báo biến ở đầu mỗi dòng lệnh hoặc hàm : giúp dễ dàng đọc và hiểu code hơn. Cung cấp một nơi duy nhất để tìm kiếm các biến cục bộ. Làm cho nó dễ dàng hơn để tránh các biến toàn cục không mong muốn. Giảm khả năng khai báo lại không mong muốn
- Khởi tạo biến trước khi sử dụng: Khởi tạo biến trước khi sử dụng chúng, chúng ta có thể giảm thiểu các lỗi liên quan đến biến không được khởi tạo hoặc có giá trị không chính xác. Việc khởi tạo biến cung cấp ý tưởng về mục đích sử dụng (và kiểu dữ liệu dự kiến)

* Tránh sử dụng hàm eval(): eval() là một hàm trong js cho phép thục thi một biểu thức hoặc một chuỗi mã JS
  Ví dụ:
  var userInput = prompt("Enter name...")
  eval(userInput) // This is unsafe and can execute any code in the string passed as argument
  Trong ví dụ trên người dùng được yêu cầu nhập vào một đoạn mã JS và hàm eval được sử dụng để thực thi đoạn mã đó. Tuy nhiên, nếu người dùng nhập vào mã độc hoặc mã được thiết kế để tấn công ứng dụng của bạn, thì mã đó sẽ được thực thi và gây ra các vấn đề về bảo mật như XSS(Cross-site scripting) hoặc SQL Injection.

2: Nên sử dụng const, không nên dùng new object()

- Khai báo object, array vs const => sẽ ngăn chặn bất kỳ sự thay đổi kiểu ngẫu nhiên.
- Hạn chế sử dụng new object : => Dùng "" thay thế new string(). Dùng 0 thay thế new number(). Dùng false thay thế new boolean(). Dùng {} thay thế new object(). Dùng [] thay thế new array(). Dùng /()/ thay thế new RegExp(). Dùng function(){} thay thế new function()

3: Array dùng const tại sao có thể dùng hàm push() thêm giá trị vô array?
=> Tại vì khai báo một mmangr bằng từ khoá const, thì nó chỉ bảo vệ được cho biến không gán được một mảng mới. Tuy nhiên các phần tử của mảng có thể được thay đổi mà không vi phạm giới hạn này. Do đó khi push() để thêm phần tử vào mảng bạn không vi phạm tính không thay đổi của biến myArray.
