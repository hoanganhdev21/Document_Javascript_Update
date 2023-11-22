// ES6
// Ôn lại kiến thức về prototype and constructor function
// Constructor/protype way
/**
 * Hàm tạo đối tượng Person với thuộc tính name và phương thức ghi tên vào
 * bảng điều khiển.
 * @param name - Tên của người được tạo như một thể hiện của lớp Person. Trong trường hợp này,
 * tên là "Nguyễn Hoàng Anh".
 */
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// }
// const evondev = new Person("Nguyễn Hoàng Anh", "20");
// evondev.getName();

// 14.1. Class
// => chữ cái đàu in hoa.
// syntax:
class Person2 {
  // constructor
  constructor(name) {
    this.name = name;
  }
  // prototype
  // Get: -> Lấy một thông tin gì đó.
  //   getName() {
  //     return this.name;
  //   }
  // Set: -> Thay đổi giá trị gì đó
  // newName: là một argument(giá trị mới) cần đưa vào để thay đổi giá trị this.name
  //   setName(newName) {
  //     this.name = newName;
  //   }

  //   getter and setter ở trong ES6 hỗ trợ:
  //   _name: ghi như này để tránh xung đột với cái name của get and set.
  get name() {
    return this._name;
  }
  set name(newName) {
    return (this._name = newName);
  }
}

const anh = new Person2("Hoàng Anh Nguyễn");
// console.log(anh.getName());
// anh.setName("Nguyễn Hoàng Anh"); // => Set lại name.
// console.log(anh.getName()); // => Cập nhật lại get.

// Truy xuất get and set trong ES6:
console.log(anh.name);
// => Khi mà chúng ta sử dụng anh.name thì nó sẽ tìm đến cái phương thức là name và nó sẽ bind đến giá trị là name nó sẽ hiểu là get và lấy
// => Tương tự get cũng vậy
anh.name = "Nguyễn Hoàng Anh Monitor !"; // => set lại giá trị name.
console.log(anh.name);

// 14.2. Class expression
// Nó không bị hoisting nên cần phải khai báo trước khi mà khở tạo ở dưới.
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("Evondev");
console.log(evon.name);

// 14.3. first class:
// => chúng ta có thể sử dụng class truyền vào function
// -> chúng ta truyền class vào function dưới dạng parameter
/**
 * Hàm "công ty" tạo một thể hiện mới của một lớp nhất định.
 * @param aClass - Tham số `aClass` là tham chiếu đến một lớp trong JavaScript. Nó được sử dụng như một
 * đối số cho hàm `company`, hàm này tạo một thể hiện mới của lớp và trả về nó.
 * @returns Hàm `company` trả về một thể hiện mới của lớp được truyền dưới dạng đối số của nó là `aClass`.
 */
function company(aClass) {
  return new aClass();
}

/* Đoạn mã này đang tạo một thể hiện mới của một lớp bằng cách sử dụng hàm `company`. Chức năng `công ty`
lấy một lớp làm đối số và trả về một thể hiện mới của lớp đó. Trong trường hợp này, lớp đang
được truyền dưới dạng đối số là một lớp ẩn danh với phương thức `sayHello` ghi nhật ký một thông báo vào
bảng điều khiển. Thể hiện được trả về sau đó được gán cho biến `hello` và phương thức `sayHello`
được gọi trong trường hợp đó, dẫn đến thông báo "Xin chào Hoàng Anh Nguyễn" được đăng nhập vào
bảng điều khiển. */
let hello = company(
  class {
    sayHello() {
      console.log("Hello Hoàng Anh Nguyễn");
    }
  }
);
hello.sayHello();

// 14.4. Static method
// => Không cần phải dùng từ khoá new
// -> Tức là cái Static method không bị phụ thuộc vào bất kỳ object nào nó sẽ gọi trực tiếp vào class luôn.
// Tóm lại: -> Dùng để thực hiện 1 chức năng nào đó từ class luôn mà không phải thông qua từ khoá new tức là không phải thông qua 1 object nào cả
/* Lớp Article có một hàm tạo lấy tiêu đề và ngày tháng, và một phương thức tĩnh so sánh điều đó
so sánh hai đối tượng Article dựa trên ngày của chúng. */
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
/* Đoạn mã này đang tạo một mảng các đối tượng Article với tiêu đề và ngày tháng khác nhau. Các đối tượng này sẽ
được sử dụng để minh họa phương thức tĩnh `so sánh` trong lớp Article. */
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
// const b = new Article("JS", new Date(2021, 11, 1)),
// b.compare
// articles.sort((a, b) => a.date - b.date); => sẽ tương ứng với đoạn static compare(a, b) {return a.date - b.date;}
// className.methodName
/* Mã này đang sắp xếp một mảng các đối tượng Article dựa trên ngày của chúng bằng phương thức tĩnh
`so sánh` trong lớp Article. Phương thức `sắp xếp` lấy một hàm so sánh làm đối số, mà
trong trường hợp này là phương thức tĩnh `so sánh` trong lớp Article. Sau khi sắp xếp mảng, mã
ghi tiêu đề của bài viết đầu tiên trong mảng đã sắp xếp vào bảng điều khiển. */
articles.sort(Article.compare);
console.log(articles[0].title);
// const a = new Article
// a.compare

// 14.5. Static properties
// => Truy xuất từ chính class name.
/* Lớp "Mục" theo dõi số lượng phiên bản được tạo bằng thuộc tính và phương thức tĩnh. */
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
    // this.constructor.propertyName
  }
  static count = 0;
  static getCount() {
    // className.propertyName
    return Item.count;
  }
}
/* Đoạn mã này đang tạo hai phiên bản của lớp `Item`, một phiên bản có tên "Pencil" và phiên bản còn lại
với tên gọi "Máy tính xách tay". Lớp `Item` theo dõi số lượng phiên bản được tạo bằng cách sử dụng
thuộc tính tĩnh `count` và một phương thức tĩnh `getCount()`. Câu lệnh `console.log()` ghi nhật ký
giá trị của `Item.getCount()`, trả về tổng số phiên bản đã tạo cho bảng điều khiển. */
const pencil = new Item("Pencil");
const laptop = new Item("Laptop");
console.log(Item.getCount());

// 14.6. Super and extends
// =>
/* Lớp Animal có một hàm tạo nhận một số chân và một phương thức đi bộ ghi nhật ký
thông điệp về việc đi bộ trên đôi chân đó. */
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`walking on ${this.legs} legs`);
  }
}

/* Lớp Bird mở rộng lớp Animal và thêm phương thức fly để chỉ ra rằng chim có thể bay. */
// kế thừa từ class trên.
class Bird extends Animal {
  constructor(legs) {
    super(legs); // => this.legs = legs;
  }
  fly() {
    console.log("I can flying");
  }
}

/* Đoạn mã này đang tạo một thể hiện mới của lớp `Bird` với 2 chân và gán nó cho biến
`chim`. Sau đó, nó gọi phương thức `fly()` trên cá thể `bird`, phương thức này ghi một thông báo tới
bảng điều khiển chỉ ra rằng con chim có thể bay. Cuối cùng, nó gọi phương thức `walking()` trên `bird`
dụ, ghi một thông báo vào bảng điều khiển cho biết con chim đang đi bằng 2 chân. */
let bird = new Bird(2);
console.log(bird.fly());
console.log(bird.walking());
