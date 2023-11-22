// MVC: -> Model View Controler.
// Model: Xử lý chức năng về logic.
// View: Những cái hiển thị ngoài giao diện
// Controler: Gắn kết giữa View and Model, thực hiện những cái liên quan đến user.
class Model {
  /**
   * Hàm tạo này khởi tạo danh sách các việc cần làm bằng cách truy xuất nó từ bộ nhớ cục bộ hoặc
   * tạo một danh sách trống.
   */
  constructor() {
    // Chứa danh sách các todos mà chúng ta sẽ add vào.
    /* Đoạn mã trên đang đặt giá trị của thuộc tính `todos` cho một mảng các đối tượng
    được phân tích cú pháp từ khóa `todoList` trong `localStorage` của trình duyệt. Nếu phím `todoList` không
    tồn tại trong `localStorage`, nó đặt thuộc tính `todos` thành một mảng trống. */
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
  }

  /**
   * Hàm đặt trình xử lý khi danh sách việc cần làm thay đổi.
   * Trình xử lý @param - Tham số "trình xử lý" là một hàm sẽ được gọi khi danh sách việc cần làm
   * thay đổi. Nó được sử dụng để cập nhật chế độ xem với danh sách todos mới.
   */

  // Mỗi lần thêm xoá sửa sẽ cập nhật lại và thay đổi bên ngoài giao diện.
  handleTodoChange(handler) {
    this.todoListChange = handler;
    // handleTodoChange = (todos) => {
    //   this.view.displayTodos(todos);
    // };
  }

  /**
   * Chức năng cập nhật danh sách việc cần làm và lưu nó vào bộ nhớ cục bộ.
   * @param todos - Tham số "todos" có thể là một mảng các đối tượng đại diện cho danh sách việc cần làm
   * mặt hàng. Hàm "_reload" lấy mảng này làm đối số và cập nhật giao diện người dùng để phản ánh bất kỳ
   * thay đổi được thực hiện cho danh sách. Nó cũng lưu danh sách đã cập nhật vào bộ nhớ cục bộ bằng cách sử dụng "setItem"
   * phương pháp của
   */
  _reload(todos) {
    this.todoListChange(todos);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }

  // Thêm todos
  /**
   * Hàm thêm một mục việc cần làm mới vào một mảng các việc cần làm và tải lại danh sách.
   * @param todoText - Một chuỗi đại diện cho văn bản của một mục việc cần làm mới sẽ được thêm vào danh sách.
   */
  addTodo(todoText) {
    /* Nó kiểm tra xem độ dài của chuỗi `todoText` có lớn hơn 0 hay không (nghĩa là nếu nó không phải là một chuỗi rỗng
    sợi dây). Nếu nó không trống, nó sẽ thêm chuỗi `todoText` vào mảng `todos` trong `Model`
    lớp học. */
    if (todoText.length > 0) {
      this.todos.push(todoText);
    }
    this._reload(this.todos);
  }

  // Xoá todos
  /**
   * Hàm này loại bỏ một mục việc cần làm khỏi một mảng các việc cần làm và tải lại mảng đã cập nhật.
   * @param todoText - Một chuỗi đại diện cho văn bản của mục việc cần làm cần được xóa khỏi
   * mảng `todos`.
   */
  removeTodo(todoText) {
    /* `const index = this.todos.findIndex((item) => item === todoText);` đang tìm chỉ mục của
    mục việc cần làm khớp với tham số `todoText` trong mảng `việc cần làm` của lớp `Model`. Nó
    sử dụng phương thức `findIndex()` để tìm kiếm phần tử đầu tiên trong mảng thỏa mãn
    đã cung cấp chức năng kiểm tra, trong trường hợp này là chức năng kiểm tra xem thông số `item` có
    bằng với tham số `todoText`. Nếu một phần tử phù hợp được tìm thấy, phương thức sẽ trả về phần tử của nó
    chỉ mục trong mảng. Nếu không tìm thấy phần tử phù hợp, phương thức trả về -1. Chỉ số trả về
    sau đó được lưu trữ trong hằng số `index` để sử dụng sau này trong việc xóa mục việc cần làm khỏi mảng. */
    const index = this.todos.findIndex((item) => item === todoText);
    /* `this.todos.splice(index, 1)` đang xóa một phần tử khỏi mảng `todos` tại điểm đã chỉ định
    `chỉ mục`. Phương thức `splice()` thay đổi nội dung của một mảng bằng cách loại bỏ hoặc thay thế
    các phần tử hiện có và/hoặc thêm các phần tử mới. Trong trường hợp này, nó đang xóa mục việc cần làm tại
    chỉ mục được chỉ định từ mảng `todos`. */
    this.todos.splice(index, 1);
    /* `this._reload(this.todos);` đang gọi phương thức `_reload` của lớp `Model` với
    mảng `todos` hiện tại làm đối số của nó. Phương thức `_reload` cập nhật trình xử lý `todoListChange`
    với mảng `todos` mới và cũng cập nhật `localStorage` với mảng `todos` mới. */
    this._reload(this.todos);
  }
}

class View {
  /**
   * Chức năng này tạo danh sách việc cần làm với biểu mẫu nhập và vùng chứa danh sách.
   */
  constructor() {
    this.app = this.getElement("body");

    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.submit = this.createElement("button", "todo-submit");
    this.submit.type = "submit";
    this.submit.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList = this.createElement("div", "todo-list");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }

  // createElement: Tạo ra element chúng ta muốn.
  /**
   * Hàm này tạo một phần tử HTML mới với tên lớp tùy chọn.
   * Thẻ @param - Tên thẻ HTML của phần tử được tạo, chẳng hạn như "div", "p", "span", v.v.
   * @param className - Tham số className là một chuỗi đại diện cho (các) tên lớp CSS sẽ là
   * được thêm vào phần tử mới được tạo. Nếu không cung cấp tên lớp, hàm sẽ chỉ tạo
   * phần tử không có lớp nào.
   * @returns một phần tử HTML mới được tạo với thẻ được chỉ định và tên lớp tùy chọn.
   */
  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.classList.add(className);
    return elm;
  }

  // getElement: truy vấn 1 element nào đó.
  /**
   * Hàm trả về phần tử đầu tiên trong tài liệu khớp với bộ chọn đã cho.
   * Bộ chọn @param - Tham số bộ chọn là một chuỗi đại diện cho bộ chọn CSS được sử dụng để
   * xác định phần tử HTML sẽ được truy xuất từ ​​DOM. Nó có thể là một lớp, ID, tên thẻ hoặc bất kỳ
   * bộ chọn CSS hợp lệ khác.
   * @returns Hàm `getElement(selector)` trả về phần tử đầu tiên trong tài liệu
   * khớp với bộ chọn đã chỉ định.
   */
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }

  // Private riêng tư chỉ sử dụng trong class này thôi.
  // => Dùng dấu _....
  get _todoValue() {
    // Trả về value của input
    return this.input.value;
  }

  // Reset value
  _resetValue() {
    this.input.value = "";
  }

  // phương thức hiển thị:
  /**
   * Chức năng này hiển thị danh sách các việc cần làm và cho phép người dùng xóa chúng.
   * @param todos - một mảng các mục việc cần làm cần được hiển thị trên trang web. Chức năng
   * xóa mọi mục việc cần làm hiện có khỏi trang web và sau đó tạo các phần tử HTML mới cho mỗi việc cần làm
   * mục trong mảng, bao gồm một khoảng văn bản và biểu tượng thùng rác. Chức năng sau đó nối thêm những
   * các yếu tố vào danh sách việc cần làm trên
   */
  displayTodos(todos) {
    /* Khối mã này đang xóa tất cả các phần tử con của phần tử `todoList` trên trang web. Nó là
    được sử dụng để xóa các mục việc cần làm hiện có khỏi chế độ xem trước khi hiển thị danh sách các mục việc cần làm mới. */
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    /* Khối mã này đang kiểm tra xem mảng `todos` có ít nhất một mục hay không. Nếu có, nó sẽ lặp lại
    qua từng mục trong mảng và tạo một phần tử HTML mới cho từng mục. phần tử mới là
    một `div` với tên lớp `todo-item`, chứa phần tử `span` với tên lớp
    `todo-text` và nội dung văn bản của mục việc cần làm hiện tại. Nó cũng chứa một phần tử `i` với
    tên lớp `fa fa-trash todo-remove` và thuộc tính `data-value` được đặt thành giá trị của
    mục việc cần làm hiện tại. Cuối cùng, phần tử `div` mới được thêm vào phần tử `todoList` trên
    trang web. */
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa fa-trash todo-remove";
        icon.setAttribute("data-value", todoText);

        todoItem.append(span, icon);

        this.todoList.append(todoItem);
      });
    }
  }

  // Phương thức thêm:
  /**
   * Hàm này thêm trình xử lý sự kiện vào biểu mẫu và gọi hàm xử lý với giá trị của
   * đầu vào biểu mẫu khi biểu mẫu được gửi.
   * @param handler - Tham số `handler` là một hàm sẽ được gọi khi biểu mẫu được
   * được gửi với giá trị việc cần làm hợp lệ. Nó lấy giá trị todo làm đối số của nó và chịu trách nhiệm cho
   * thêm việc cần làm vào mô hình dữ liệu của ứng dụng và cập nhật chế độ xem tương ứng.
   */
  viewAddTodo(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      /* Khối mã này đang kiểm tra xem thuộc tính `_todoValue` của lớp `View` có trống không. Nếu như
      nó không trống, nó gọi hàm `handler` với giá trị `_todoValue` như hàm của nó
      đối số và sau đó đặt lại giá trị của trường đầu vào thành một chuỗi trống bằng cách sử dụng
      Phương thức `_resetValue`. Mã này được sử dụng để thêm một mục việc cần làm mới vào mô hình dữ liệu của ứng dụng
      và cập nhật chế độ xem cho phù hợp. */
      if (this._todoValue) {
        handler(this._todoValue);
        this._resetValue();
      }
    });
  }

  // Phương thức xoá.
  /**
   * Hàm này xóa một mục việc cần làm khỏi danh sách việc cần làm và gọi một hàm xử lý với mục đã xóa
   * giá trị của mặt hàng.
   * @param handler - Tham số `handler` là một hàm sẽ được gọi khi một mục việc cần làm được
   * đã xóa khỏi danh sách. Nó nhận một đối số, đó là giá trị của mục việc cần làm
   * LOẠI BỎ. Hàm này được truyền dưới dạng đối số cho phương thức `viewRemoveTodo`, là
   * chịu trách nhiệm loại bỏ
   */
  viewRemoveTodo(handler) {
    this.todoList.addEventListener("click", (e) => {
      /* Khối mã này đang kiểm tra xem phần tử được nhấp có khớp với bộ chọn CSS ".todo-remove" hay không. Nếu như
      đúng như vậy, nó xóa nút cha của phần tử được nhấp (là mục việc cần làm) khỏi
      DOM và gọi hàm `handler` với giá trị của thuộc tính `data-value` của
      phần tử được nhấp. Điều này được sử dụng để loại bỏ mục việc cần làm tương ứng khỏi mô hình. */
      if (e.target.matches(".todo-remove")) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
        const value = e.target.dataset.value;
        handler(value);
      }
    });
  }
}

class Controller {
  /**
   * Đây là một chức năng xây dựng khởi tạo một mô hình và chế độ xem, đăng ký các trình lắng nghe sự kiện cho
   * thêm và xóa việc cần làm và xử lý các thay đổi đối với danh sách việc cần làm.
   * Mô hình @param - Tham số mô hình là một đối tượng đại diện cho dữ liệu và logic của
   * ứng dụng. Nó chứa các phương thức để thêm, xóa và cập nhật todos, cũng như các thuộc tính
   * lưu trữ trạng thái hiện tại của todos.
   * @param view - Tham số view là một đối tượng đại diện cho giao diện người dùng của
   * ứng dụng. Nó cũng chứa các phương thức để hiển thị và cập nhật danh sách việc cần làm trên màn hình.
   * khi xử lý đầu vào của người dùng.
   */
  constructor(model, view) {
    /* Đoạn mã trên đang định nghĩa hai thuộc tính `model` và `view` trên đối tượng `this`. Các giá trị của
    các thuộc tính này đang được đặt thành giá trị của các biến `model` và `view` tương ứng. */
    this.model = model;
    this.view = view;
    // this.model.addTodo("Tran anh tuan");
    // this.view.displayTodos(this.model.todos);
    /* Đoạn mã trên đang đăng ký trình xử lý sự kiện cho các hành động sau: */
    this.model.handleTodoChange(this.handleTodoChange);
    this.view.viewAddTodo(this.handleAddTodo);
    this.view.viewRemoveTodo(this.handleRemoveTodo);

    // this.handleTodoChange(this.model.todos);
  }

  /* `handleTodoChange` là một phương thức trong lớp `Controller` lấy một mảng todo làm phương thức
  đối số và cập nhật chế độ xem bằng cách gọi phương thức `displayTodos` của lớp `View` với
  mảng `todos` làm đối số của nó. Phương thức được xác định bằng biểu thức hàm mũi tên và là
  được gán cho thuộc tính `handleTodoChange` của phiên bản `Controller`. Điều này cho phép phương pháp
  được chuyển dưới dạng hàm gọi lại cho phương thức `handleTodoChange` của lớp `Model`, mà
  chịu trách nhiệm cập nhật danh sách todo và kích hoạt chức năng gọi lại để cập nhật
  xem. */
  // Mỗi lần thêm xoá sửa sẽ thay đổi giao diện ngoài DOM.
  handleTodoChange = (todos) => {
    this.view.displayTodos(todos);
  };

  /* `handleAddTodo` là một phương thức trong lớp `Controller` nhận tham số `todoText` và gọi
  phương thức `addTodo` của lớp `Model` với tham số `todoText` làm đối số. Cái này
  phương thức được xác định bằng biểu thức hàm mũi tên và được gán cho `handleAddTodo`
  thuộc tính của phiên bản `Trình điều khiển`. Điều này cho phép phương thức được truyền dưới dạng hàm gọi lại
  đến phương thức `viewAddTodo` của lớp `View`, lớp này chịu trách nhiệm thêm một mục việc cần làm mới
  vào mô hình dữ liệu của ứng dụng và cập nhật chế độ xem tương ứng. */
  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };

  /* Đoạn mã trên định nghĩa một hàm gọi là `handleRemoveTodo` nhận tham số `todoText`.
  Trong hàm, nó gọi một phương thức `removeTodo` trên một đối tượng có tên là `model`, chuyển vào
  tham số `todoText` làm đối số. Mục đích của chức năng này là xóa một mục việc cần làm khỏi
  ngươi mâu. */
  handleRemoveTodo = (todoText) => {
    this.model.removeTodo(todoText);
  };
}

/* Đoạn mã trên đang tạo một thể hiện mới của lớp Trình điều khiển, chuyển vào một thể hiện mới của một
Lớp Model và một thể hiện mới của lớp View làm đối số. Đây có thể là một phần của một lớn hơn
Ứng dụng JavaScript tuân theo mẫu thiết kế Model-View-Controller (MVC). */
const app = new Controller(new Model(), new View());
