<!-- CÂU HỎI PHỎNG VẤN VỀ KIẾN THỨC -->

1: Thẻ meta trong HTML là gì?
2: Kể tên cách viết CSS?
3: Phạm vi trong JS là gì?
4: Phân biệt inline, block, inline-block?
5: Sự khác nhau của JS và jQuery?
6: Nêu các date type trong JS?
7: git push và git pull là gì?
8: Phân biệt các hàm trong JS?
9: Giải thích IIFES?
10: Điểm khác nhau giữa class component và functional component?
11: Box-sizing là gì?
12: Grid trong CSS là gì?
=> Giúp chia các phần tử thành hàng, cột để có bố cục nhất quán cho trang web.
13: Bootstrap là gì?
=> Là frameworks CSS chứa các template CSS có sẵn nhằm phục vụ cho việc xây dụng website có reponsive.
14: Vì sao lỗi website xảy ra trên các trình duyệt khác nhau?
=> Từng tình duyệt hỗ trợ HTML cũng như render CSS khác nhau. Ngoài ra vấn đề có thể nằm ở nền tảng hoặc hệ điều hành.
15: npm là gì?
=> quản lý các thư viện js, gồm các đoạn code có sẵn giúp tiết kiệm thời gian công việc.
16: Scope là gì?
=> Là phạm vi truy cập của các biến khai báo gồm global và local
17: Server-site rendering(SSR) là gì?
=> cho phép render 1 website ở trên server và trả về trình duyệt

- Điểm mạnh: tốc dộ tải trang, tối ưu SEO, tương thích với nhiều thiết bị cũ
- Điểm yếu: chi phí tài nguyên cao, phức tạp hơn trong việc lập trình, khó bảo trì, tải trang chậm hơn trong một số trường hợp.

18: Client-site rendering là gì?
=> sẽ render code ở các client thay vì ở server và trả về html css js lúc này thay vì sử dụng sức mạng chủa server thì có thể tận dụng sức mạnh của client để xử lý cái flow của nó sẽ là người dùng dửi reset đến server sau đó server sẽ trả về một đống htnl css js lúc này nó gọi là dữ liệu thô sau đó browser sẽ tải html css js về trong lúc đó mọi người có thể hiện một cái loading trong cái app sẽ mượt mà hơn. Cuối cùng JS sẽ xử lý call API lấy dữ liệu về và xử lý DOM sau đó hiển thị dữ liệu lên website

- Điểm mạnh: render website nhanh sau khi innistial load, rất phù hợp để làm web app được hỗ trợ bởi các js framwork rất mạnh
- Điểm yếu: khó triển khai với SEO, thời gian lỗi ban đầu lâu vì phải tải toàn bộ js về

19: Renerator function trong js là gì? Ứng dụng của nó như thế nào?

- Generator function là một tính năng trong js cho phép chúng ta tạo ra một loại hàm đặc biệt, có thể tạm dùng và tiếp tục thực thi khi cần thiết. Generator có thể trả về một chuỗi các giá trị thông qua từ khoá yield, hàm generator sẽ tạm dùng và trả về giá trị của biểu thức đucojw chỉ định. Việc thực thi hàm generator sẽ tiếp tực từ vị trí tạm dùng này khi hàm generator được gọi lại.
- Xử lý dữ liệu lớn và tránh việc tràn bộ nhớ: Xử lý dữ liệu lớn, việc load và xử lý chúng một lần có thể gây ra tràn bộ nhớ hoặc làm chậm quá trình thực thi. Generator cho phép ta load dữ liệu 1 lần , và chỉ xử lý một phần của chúng mỗi lần. Khi xử lý xong phần đó, ta có thể tạm dừng việc thực thi và load phần tiếp theo của dữ liệu để xử lý, giúp tránh việc tràn bộ nhớ, và tăng tốc quá trình thực thi.
- Tạo ra các chuỗi số hocajw dữ liệu vô hạn: Với generator, ta có thể tạo ra các chuỗi số hoặc dữ liệu vô hạn một cách đơn giản và dễ dàng. Điều này rất hữu ích khi cần sử dụng các giá trị liên tục và không có giới hạn.
- Xử lý các lần lặp tuỳ ý: Khi chúng ta cần xử lý các lần lặp một cách tuỳ ý, generator cho phép ta điều khiển qua trình lặp một cách linh hoạt và kiểm soát được các giá trị được sinh ra bởi quá trình đó.
- Xử lý các tác vụ đồng bộ .
- Xử lý các tác vụ đồng bộ: Generator cung cấp một cách tiếp cận khác để xử lý các tác vụ đồng bộ bằng cách sử dụng từ khoá yield để tạm dùng việc thực thi của generator cho đến khi tác vụ đồng bộ được hoàn thành. Điều này cho phép chúng ta xử lý các tác vụ đồng bộ một cách tuần tự và đơn giản, giúp cho mã nguồn trở nên dễ đọc và dễ hiêu hơn.

20: Sự khác biệt giữa null và undefined?

- Null là một giá trị được gán cho một biến hoặc thuộc tính khi ta muốn chỉ rõ ràng giá trị đó không có giá trị hoặc không tồn tại. Null là một giá trị rồng được dùng để biểu thị sự thiếu vắng của giá trị tức không có giá trị nào được gán cho biến.
- Undefined: là một giá trị đucojw sử dụng khi một biến hoặc thuộc tính chauw được khởi tạo hoặc không có giá trị nào được gán cho nó.
- Lưu ý: null được coi là một giá trị rỗng được gán cho biến hoặc thuộc tính, trong undefined chỉ xảy ra khi ta chưa gán giá trị cho biến hoặc thuộc tính. Vì vậy, nếu ta muốn kiểm tra một biến có giá trị hay không, ta nên sử dụng typeof để kiểm tra bởi vì nếu ta kiểm tra bằng cách so sánh với undefined, nó sẽ không cho kết quả như mong muốn khi biến đã được gán giá trị null.

21: giải thích closure trong JS?

- Closure: Là một tính năng quan trọng trong JS. Nó cho phép một hàm truy cập đến các biến bên ngoài phạm vi của nó. Một closure được khởi tạo khi một hàm được khai báo bên trong một hàm khác và truy cập đến các biến bên ngoài phạm vi của nó. Khi hàm bên ngoài được thực thi và kết thúc các biến và hàm bên trong closure vẫn được lưu giữ trong bộ nhớ và có thể truy cập được hàm bên trong closure.

22: Cách hoạt động của event loop trong JS?

- Event loop(vòng lặp sự kiện) là một cơ chế trong JS để xử lý các sự kiện và callback một cách đồng bộ. Khi một tác vụ bất đồng bộ(Như tải tài nguyên từ server) được gọi, nó sẽ được đưa vào hàng đợi để xử lý. Trong khi đó, JS tiếp tục thực hiện các tác vụ dồng bộ khác. Khi tác vụ bất đồng bộ đã hoàn thành nó sẽ được đưa vào hàng đợi riêng để trả về kết quả.

* Event loop là một vòng lặp vô hạn, luôn lắng nghe các sự kiện và callback. Khi một sự kiện xảy ra(như click chuột), hoặc một calbak được đưa vào hàng đợi, event lôp sẽ kiểm tra xem có callback naoif trong hàng đợi không. Nếu có, nó sẽ lấy callback đầu tiên ra khỏi hàng đợi và thực hiện nó.
* Khi tác vụ bất đồng bộ (như tải tài nguyên từ server) hoàn thành, một callback đucojw đưa vào hàng đợi. Nếu event loop đnag rảnh, nó sẽ lấy callback đó ra khỏi hàng đợi và thực hiện nó. Nếu event loop đang bận với một callback khác, callback mới sẽ được đưa vào hàng đợi và thực hiện sau.
* Lưu ý: Nếu một callback mất quá nhiều thời gian để thực hiện, nó có thể làm cho event loop bị chặn lại (blocking), và các callback khác sẽ không thự hiện cho đến khi callback đó hoàn thành. Điều này có thể gây ra các vấn đề về hiệu suất và tương tác người dùng. Do đó, việc xử lý các tác vụ bất đồng bộ bằng cách xử dụng promise hoặc asyn/await sẽ tránh được các vấn đề này.

23: Cho biết sự khác nhau giữa map() và forEach() trong JS?

- Là hai phương thức dùng đẻ duyệt qua một mảng trong JS
- Sự khác nhau:

* map trả về một mảng mới được tạo ra từ các giá trị trả về của hàm.
* forEach không trả về gì cả
* forEach thực hiện một hàm được truyền vào với mỗi phần tử cú pháp như sau(array.forEach(function(curentValue, index, array)))
* currentValue: giá trị hiện tại của phần tử đang được duyệt, index: chỉ số của phần tử đang được duyệt, array: mảng đăng được duyệt.

24: Phương thức call(), bind() và apply() có tác dụng gì trong JS?

- Ba hàm bind, call, apply là các prototype của function nên chỉ function mới có thể gọi được 3 hàm này. Sở dĩ, một function có thể gọi function khác vì trong JS function cũng là một loại object, mà đã là object thì sẽ có prototype, hay nói cách khác là gọi được phương thức của nó.
- call(): được sử dụng để gọi một hàm từ ngữ cảnh cụ thể và một tập hợp các tham số cú pháp function.call(this, arg1, arg2,....)
- bind(): sử dụng để tạo ra phiên bản mới của hàm với giá trị this được thiết lập một cách rõ ràng và trả về hàm đó cú pháp function.bind(this, arg1, arg2,....)
- apply(): cũng giống như call() nhưng khác ở chỗ tham số truyền vào được đưa vào trong mảng cú pháp function.applu([this, arg1, arg2,....])

<!-- =================================================================================================================== -->
<!-- CÂU HỎI PHỎNG VẤN VỀ KỸ NĂNG -->

- Cách để giảm thời gian load của ứng dụng/web?
- Cách quản lý hệ thống và code?
- Khả năng thiết kế đồ hoạ?
