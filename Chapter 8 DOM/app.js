// DOM
// Document Object Model
// Dom là những cái HTML đã gặp.
// DOM attribute: như src=""....
// DOM node: như body...

// 8.1. Selecting nodes
// 8.1.1. document.querySelector("selector")
// => trả về 1 node nếu tồn tại selector đó, ngược lại nó sẽ trả về null.
// selectors: .header, p, body, #heading,...
// => Được sử dụng nhiều nhất.
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
console.log(singleNode);
console.log(singleNode2);
console.log(singleNode3);
console.log(singleNode4);

// 8.1.2. document.querySelectorAll("selector")
// => trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach, map and filter thì không sử dụng được.
// nó giống array là có thể loop nhưng ko sử dụng được các phương thức như push, pop, shift,...
// => Được sử dụng nhiều nhất.
const multiNodes = document.querySelectorAll(".item");
for (let i = 0; i < multiNodes.length; i++) {
  console.log(multiNodes[i]);
}
console.log(multiNodes);

// 8.1.3. document.getElementsByClassName("className")
// => trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

// 8.1.4. document.getElementsByTagName("tagName")
// => trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes);

// 8.1.5. document.getElementById("id")
// => trả về 1 node có id đó nếu không có sẽ trả về null.
// const idNode = document.getElementById("spinners");
const idNode = document.querySelector("#spinner");
console.log(idNode);

// 8.1.6. Chú ý
// Hay dùng nhất document.querySelector(tag, class, id), document.querySelectorAll(tag, class).

// 8.2. Các phương thức trong DOM.
// 8.2.1.selector.getAttribute("attribute")
// => lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute -> thuộc tính: href, id, class, src, style, ....
// attribute nó dựa vào selector
// Đầu tiên chúng ta phải chọn được cái selector.
const link = document.querySelector(".link");
// console.log(link.getAttribute("href")); // => evondev.com

const li = document.querySelectorAll(".items");
// li.getAttribute("class");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);
// if(link) {
// }

// 8.2.2. selector.setAttribute("attribute", value)
// => set giá trị cho attribute nào đó của selector.
// => value ở đây có thể là số, string, ...
const link2 = document.querySelector(".link2");
// link2.setAttribute("target", "_blank"); // => Trường hợp có 1 thẻ.

// TRƯỜNG HỢP CÓ NHIỀU THẺ:
// => Dùng vòng lặp để duyệt qua từng thẻ
const listLinks = document.querySelectorAll("a.link2");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));

// 8.2.3. selector.removeAttribute("attribute")
// => xoá attribute của selector
const p = document.getElementById("spinner2");
// p.removeAttribute("style");

// 8.2.4. selector.hasAttribute("attribute")
// => kiểm tra selector có attribute nào đó hay không, nếu có -> true ngược không có trả về false
// console.log(p.hasAttribute("class")); // false
// console.log(p.hasAttribute("id")); // true
// Check condition nếu có thì dẽ thực hiện một công việc gì đó.
// if (p.hasAttribute("id")) {
//   // do something here
//   console.log("Hoàng Anh Nguyễn");
// }

// 8.3. Những cái liên quan đến text trong DOM:
// => text là những cái nằm ở giữa thẻ tag.
// 8.3.1. textContent
// => lấy ra nội dung(only text) bao gồm text trong html tag(nếu có) của selector.
const spinner3 = document.querySelector("#spinner3");
// Thay đổi text content thành nội dung mới.
// spinner3.textContent = "Hello Nguyễn Hoàng Anh !";
// console.log(spinner3.textContent); // => Nó sẽ lấy phần text bao gồm cả khoảng trắng.
// => Nếu ở trong textcontent có html thì nó sẽ vẫn lấy.

// 8.3.2. innerText
// => Về cơ bản khá giống với textcontent thẻ HTML mà có display: none; thì nó sẽ không lấy được. Loại bỏ hết khoảng trắng ở hai bên.
// console.log(spinner3.textContent);
// console.log(spinner3.innerText);
// spinner3.textContent = `<div class="demo">hello html</div>`;

// 8.3.3. innerHTML
// => lấy ra nội dung của selector bao gồm cả HTML
// console.log(spinner3.innerHTML);
// spinner3.innerHTML = `<div class="demo">hello html</div>`;
// parse

// 8.4. Phương thức liên quan tới Class
// 8.4.1. selector.classList.add("abc")
// => Thêm class
const container2 = document.querySelector(".container2");
console.log(container2);
// container2.classList.add("is-active");

// 8.4.2. selector.classList.remove("abc")
// => Xoá class.
// => Nó sẽ tìm và xoá đi nếu thấy còn không có thì cũng sẽ không báo lỗi.
// container2.classList.remove("container2");

// 8.4.3. selector.classList.contains("container")
// => Kiểm tra xem nó có chứa class hay không.
// => Nếu có chứa thì trả về true còn ngược lại là false.
// console.log(container2.classList.contains("container2")); // true
// console.log(container2.classList.contains("is-active")); // true

// 8.4.4 selector.classList.toggle("is-active");
// => Nếu có class đó rồi thì sẽ remove class đó đi còn ngược lại chưa có thì nó sẽ add class đó vào.
// Cách viết nếu không dùng toggle:
// if (container.classList.contains("is-active")) {
//   container.classList.remove("is-active");
// } else {
//   container.classList.add("is-active");
// }

// Cách viết khi dùng toggle:
// container.classList.toggle("is-active");

// 8.4.5.selector.classname
// => trả ra chuỗi các class của selector đó.
const title = document.querySelector(".title");
// console.log(title.className);
// title.className = "title";
// menu toggle class
// const menu = document.querySelector(".menu");
// menu.classList.add("is-show");
// menu.classList.remove("is-show");

// 8.4.6. matches():
// => Kiểm tra xem có khớp hay không.

// 8.5. NHỮNG PHƯƠNG THỨC LIÊN QUAN ĐẾN ADD, DELETE, FIX, UPDATE NODE IN JAVASCRIPT.
// 8.5.1. document.createElement("element"):
// => Tạo ra 1 Element in Javascript.
// => Element chính là những thẻ tag.
const div = document.createElement("div");

// 8.5.2. selector.appendChild():
// => Phương thức appendChild() của giao diện Node thêm một nút vào cuối danh sách con của một nút cha đã chỉ định.
// => In ra bên ngoài
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div); // => Truyền vào 1 node là div chúng ta đã tạo trước đó.

// Thêm class cho element:
div.classList.add("container3");
div.className = "container wrapper"; // => Chèn nhiều class.
// Thêm nội dung
div.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laboriosam error dolor dignissimos aliquam mollitia molestiae quibusdam provident voluptatum, rem recusandae consequuntur in eligendi aut laudantium, cum nesciunt. Laboriosam, accusantium?";

// Thêm HTML:
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");

// 8.5.3. Phương thức Element.prepend()
// => chèn một tập hợp các đối tượng Node hoặc đối tượng chuỗi trước phần tử con đầu tiên của Phần tử. Các đối tượng chuỗi được chèn dưới dạng các nút Văn bản tương đương.

// Bài tập: Tạo ra HTML như đã minh hoạ ở file HTML.
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);

// 8.5.4. document.createTextNode():
// => Tạo một nút Văn bản mới. Phương pháp này có thể được sử dụng để thoát các ký tự HTML.
// => Thêm nội dung giống như textcontent.
const h1 = document.createElement("h1");
const text = document.createTextNode("Hello my name is Evondev");
body.appendChild(h1);
h1.appendChild(text);

// 8.5.5. element.cloneNode():
// => Phương thức cloneNode() của giao diện Node trả về một bản sao của nút mà phương thức này được gọi. Tham số của nó kiểm soát xem cây con chứa trong một nút có được nhân bản hay không.
const h1Clone = h1.cloneNode(true); // => Phải để là true thì nó mới copy được hết những cái ở bên trong thẻ, còn không để gì thì nó chỉ copy mỗi cái thẻ mà thôi.
body.appendChild(h1Clone);

// 8.5.6. element.hasChildNodes():
// => kiểm tra element có phần tử con hay không, có -> true, không thì trả về false.
console.log(document.querySelector("h3").hasChildNodes()); // false

// 8.6. NHỮNG CÁI LIÊN QUAN ĐẾN INSERT IN JAVASCRIPT.
// 8.6.1. element.insertAdjacentText(position, text)
// => Phương thức insertAdjacentText() của giao diện Phần tử, được cung cấp một vị trí tương đối và một chuỗi, sẽ chèn một nút văn bản mới vào vị trí đã cho tương ứng với phần tử mà nó được gọi từ đó.
// => Chèn text vào trong element.
// position: -> vị trí.
const h3 = document.querySelector("h3");
console.log(h3);
// h3.insertAdjacentText("position", "text")
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

// 8.6.2. element.insertAdjacentElement(position, node):
// => Phương thức insertAdjacentElement() của giao diện Phần tử sẽ chèn một nút phần tử đã cho vào một vị trí nhất định so với phần tử mà nó được gọi.
//
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// 8.6.3. element.insertAdjacentHTML():
// => Phương thức insertAdjacentHTML() của giao diện Phần tử phân tích cú pháp văn bản đã chỉ định dưới dạng HTML hoặc XML và chèn các nút kết quả vào cây DOM tại một vị trí đã chỉ định.
const template = `
<ul class="menu2">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);
// => Lúc này nó sẽ pase sang HTML.

// 8.7. NHỮNG VẤN ĐỀ LIÊN QUAN ĐẾN DOM NHƯ LÀ TRUY XUẤT ĐẾN NHỮNG PHẦN TỬ TRONG DOM
// 8.7.1. parentNode, parentElement, removeChild:
// +++
// parentNode and parentElement
// => Trả về phần tử cha của DOM đó.
const span = document.querySelector("span");
console.log(span.parentNode.parentNode); // => muốn lấy thêm mấy cấp nữa thì .parentNode thêm bấy nhiêu lần nữa.
console.log(span.parentElement.parentElement); // => muốn lấy thêm mấy cấp nữa thì .parentElement thêm bấy nhiêu lần nữa.

// +++
// removeChild:
// => Phương thức removeChild() của giao diện Node sẽ xóa một nút con khỏi DOM và trả về nút đã xóa.
// => Có 3 cách xoá dưới dây.
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove();

// 8.7.2. nextElementSibling and previousElementSibliing:
// nextElementSibling -> Tìm tới phần tử kế tiếp.
// previousElementSibling -> Tìm tới phần tử đứng sau nó.
// a b c
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);

// 8.7.3. childNodes and children:
// childNodes: => trả về 1 mảng  các node bên trong bao gồm textNodes
// children: => trả về các node không bao gồm textNodes.
console.log(span.childNodes); // text <strong> text
console.log(span.children);
console.log(span.children[1]); // => chúng ta cũng có thể truy xuất bằng index.

// 8.7.4. firstChild and firstElementChild:
// firstChild -> Lấy phần tử con đầu tiên bao gồm cả textNodes.
// firstElementChild -> Lấy element thôi không bao gồm textNodes.
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>

// 8.7.5. lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); // <strong>

// 8.7.6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);

// 8.8. NHỮNG PHƯƠNG THỨC LIÊN QUAN ĐẾN ĐỊNH CỠ
// 8.8.1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop:
function log(value) {
  console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // => độ rộng của phần tử.
log(boxed.offsetHeight); // => chiều cao của phần tử.
log(boxed.offsetLeft); // => vị trí của nó so với bên trái.
log(boxed.offsetTop); // => vị trí của nó so với phía trên.
log(boxed.offsetParent); // => lấy ra phần tử cha để lấy giá trị của phần tử cha.

// 8.8.2. clientWidth, clientHeight, clientLeft, clientTop:
log(boxed.clientWidth); // => độ rộng của phần tử trừ đi border.
log(boxed.clientHeight); // => chiều cao của phần tử trừ đi border.
log(boxed.clientLeft); // =>  vị trí của nó so với bên trái border.
log(boxed.clientTop); // =>  vị trí của nó so với phía trên border.

// 8.8.3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight); // => Lấy chiều cao của window trong cái khung mà chúng ta hiển thị web.
log(window.outerHeight); // => Lấy cả phần trên cùng.
log(window.innerWidth); // =>
log(window.outerWidth); // =>

// 8.8.4. selector.getBoundingClientRect()
// -> lấy ra toạ độ, kích thước của phần tử
log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// height: chiều cao

// 8.8.5. Sự khác nhau giữa Node List và HTML Collection:
// const li = document.getElementsByTagName("li"); // HTML Collection
// const li2 = document.querySelectorAll("li"); // NodeList
// log(li);
// log(li2);
// Điểm giống: có thể truy cập bằng index, có độ dài(length), giống mảng nhưng ko hẳn là mảng tức là không sử dụng được những phương thức đã học như là pop, shift, push, map, filter.
// Điểm khác:
// HTML Collection: ko sử dụng được forEach
// NodeList: Sử dụng được forEach
for (let i = 0; i < li.length; i++) {
  log(li[i]);
}

// 8.8.6. Sự khác nhau giữa parentNode và parentElement:
// parentElement có thể null
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement); // null
log(document.documentElement.parentNode); // #document

// 8.9. NHỮNG KIẾN THỨC KHÁC

// 8.9.1. document.title -> thẻ title của trang web
document.title = "Welcome to Javascript course";
console.log(document.title); // Javascript

// 8.9.2. document.head
console.log(document.head);
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");

// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

// 8.9.3. insertBefore():
// parentNode.insertBefore(newnode, existingnode)
// => Phương thức insertBefore() của giao diện Node sẽ chèn một nút trước nút tham chiếu dưới dạng nút con của nút cha được chỉ định.
// Di chuyển 1 node ra phía sau node đã tồn tại.
const ul = document.querySelector("ul");
// document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);

// insertAdjacentElement
document.querySelector("h3").insertAdjacentElement("beforebegin", ul);

// 8.9.4. replaceChild():
// => Phương thức replaceChild() của giao diện Node sẽ thay thế một nút con trong nút (cha) đã cho.
// node.replaceChild(newnode, oldnode);
// const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML collection, NodeList to Array
// const li = document.getElementsByTagName("li");
// li.forEach((item) => item);
// Array.from(HTML collection or NodeList)
// [...HTMLCOLLECT], [...NodeList]
[...li].filter((item) => item);
console.log(li);
// html body head title
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title
