// +++++
// execution context:
// => Khi mà nó thực thi đoạn code này ở trên web
/**
 * The function "timesTen" multiplies its input by 10 and returns the result.
 * @param a - a is a parameter of the function timesTen, which represents the input value that will be
 * multiplied by 10 and returned as the output of the function. In the given code, the value of x
 * (which is 10) is passed as an argument to the function, so a will have the
 * @returns The function `timesTen` is returning the value of the input parameter `a` multiplied by 10.
 * In this case, `x` is passed as the input parameter, so the function returns `10 * 10`, which is
 * `100`. This value is then assigned to the variable `y` and printed to the console using
 * `console.log(y)`.
 */
let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // 100

// +++
// Global execution context:
// the creation phase
/**
 * Global object: window
 * this: window
 * x: undefined
 * timesTen: function(){}
 * y: undefined
 */
// the execution phase
/**
 * Global object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 */

// +++
// Function execution context:
// creation phase
/**
 * Global object: arguments
 * this: window
 * a: undefined
 */
// execution phase
/**
 * Global object: arguments
 * this: window
 * a: 10
 */

// 15.1. CallStack
// => Dùng để quản lý execution context.
/**
 * Hàm tính trung bình cộng của hai số bằng cách cộng và chia tổng cho 2.
 * @param một - 10
 * @param b - Tham số "b" trong đoạn mã trên đề cập đến số thứ hai được truyền dưới dạng
 * đối số cho các chức năng "thêm" và "trung bình". Trong ví dụ đã cho, giá trị của "b" là 20.
 * @returns Giá trị của `kết quả`, là giá trị trung bình của 10 và 20, là 15.
 */
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
let result = average(10, 20);
/**
 * add() -> chạy cuối cùng
 * average() -> chạy tiếp theo
 * global() -> chạy đầu tiên
 */
// result
/**
 * average() -> chạy cuối cùng
 * global() -> chạy đầu tiên
 */
/**
 * global()
 */
/**
 */

// 15.2. event loop
// => single thread(Xử lý đơn luồng).
// Tại 1 thời điểm nó chỉ thực hiện được 1 chức năng.
/**
 * Hàm thực hiện một vòng lặp và ghi một thông báo vào bảng điều khiển.
 * Thông báo @param - Tham số thông báo là một chuỗi sẽ được ghi vào bảng điều khiển sau
 * vòng lặp while đã thực hiện xong.
 */
function task(message) {
  let number = 10000000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}
console.log("Start");
task("Loading");
console.log("End");

// main => nó sẽ chạy đồng bộ từ trên xuống sau đó nó sẽ chạy vào console.log("Start") và nó sẽ chạy vào task("Loadding")-> và nó bị blocking script(vì nó phải chờ vòng lặp chạy xong) ở chỗ này không cho chạy tới console.log("End").
// Để xử lý vấn đề trên chúng ta sử dụng callback.
// Call stack
/**
 * Start ->
 * task ->
 * End ->
 */

// 15.3. callback
// => Là 1 function nằm ở trong function khác.
/* Đoạn mã này thể hiện khái niệm gọi lại và vòng lặp sự kiện trong JavaScript. Nó đăng nhập đầu tiên
"Bắt đầu" cho bảng điều khiển, sau đó đặt thời gian chờ là 2 giây bằng chức năng `setTimeout`. Bên trong
chức năng gọi lại được chuyển đến `setTimeout`, nó gọi hàm `task` với đối số "Đang tải".
Vì `setTimeout` là một API Web nên nó được thực thi bên ngoài luồng chính và được thêm vào
hàng đợi gọi lại sau khi thời gian được chỉ định đã trôi qua. Trong khi đó, luồng chính tiếp tục thực thi
và ghi nhật ký "Kết thúc" vào bảng điều khiển. Khi ngăn xếp cuộc gọi trống, vòng lặp sự kiện sẽ kiểm tra cuộc gọi lại
hàng đợi và di chuyển hàm gọi lại từ `setTimeout` sang ngăn xếp cuộc gọi, nơi nó được thực thi và
ghi nhật ký "Đang tải" vào bảng điều khiển. */
console.log("Start");
// Start ->
setTimeout(() => {
  task("Loading");
}, 2000);
// Rời khỏi callstack và chạy qua Web APIs -> Callback queue -> Khi callstack empty -> chạy xong -> rời khỏi callstack
console.log("End"); // chạy xong và rời khỏi call stack
// Web APIs: setTimeout, fetch request, DOM Event

// 15.4. callback-hell
// => Là callback lồng vào nhau.
/* Đoạn mã này thể hiện khái niệm gọi lại và vòng lặp sự kiện trong JavaScript. Nó sử dụng lồng nhau
Các hàm `setTimeout` để tạo chuỗi nhật ký bảng điều khiển bị trì hoãn. Mỗi chức năng `setTimeout` là
được thực thi sau một độ trễ đã chỉ định và khi kết thúc, nó gọi hàm `setTimeout` tiếp theo trong
trình tự. Điều này tạo ra một chuỗi các cuộc gọi lại được thực hiện lần lượt, với độ trễ
giữa mỗi người. Kết quả là một loạt nhật ký bảng điều khiển được in ra bảng điều khiển tại
thời gian khác nhau, tạo ra một hiệu ứng chậm trễ. Mẫu này thường được gọi là "địa ngục gọi lại"
vì cấu trúc lồng nhau và khó đọc và bảo trì mã. */
setTimeout(() => {
  console.log("run the first time");
  setTimeout(() => {
    console.log("run the second time");
    setTimeout(() => {
      console.log("run the third time");
      setTimeout(() => {
        console.log("run the fourth time");
        setTimeout(() => {
          console.log("run the fifth time");
        }, 2000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 3000);

// 15.5. Promise
// => Đối tượng Promise đại diện cho sự hoàn thành cuối cùng (hoặc thất bại) của một hoạt động không đồng bộ và giá trị kết quả của nó.
// => Lời hứa là một proxy cho một giá trị không nhất thiết phải biết khi lời hứa được tạo. Nó cho phép bạn liên kết các trình xử lý với giá trị thành công cuối cùng hoặc lý do thất bại của hành động không đồng bộ. Điều này cho phép các phương thức không đồng bộ trả về các giá trị giống như các phương thức đồng bộ: thay vì ngay lập tức trả về giá trị cuối cùng, phương thức không đồng bộ trả về một lời hứa cung cấp giá trị tại một thời điểm nào đó trong tương lai.
/**
 * status: pending(đang chờ).
 * status: resolve(đã giải quyết).
 * status: reject(từ chối).
 */

// Syntax:
// argument: resole, reject
// new Promise(function(resolve, reject))
/* Đoạn mã này đang tạo một đối tượng Promise mới gọi là `willBuyIphone` đại diện cho một tương lai
hoàn thành (hoặc lỗi) của hoạt động không đồng bộ và giá trị kết quả của nó. Lời hứa được tạo ra
với một hàm nhận hai đối số, `resolve` và `reject`, là những hàm được
được gọi để cho biết liệu Lời hứa đã được thực hiện thành công hay bị từ chối do lỗi. */
let buyIphone = true;
let willBuyIphone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (buyIphone) {
      resolve("Oh yeah I have new Iphone");
      console.log("OK OK");
    } else {
      reject("Oh no, I dont have new Iphone");
      console.log("not OK");
    }
  }, 1000);
});
// console.log(willBuyIphone); // => pending gặp nhiều khi gọi API.
// => Khi chúng ta call API chúng ta chờ server trả về kết quả thì trong khoảng thời gian đó cái promise của chúng ta sẽ ở trạng thái pending
// => promise chúng ta kết thúc khi nó được resolve hoặc bị reject hoặc luôn ở trạng thái pending.

// 15.6. Method in promise
// .then(onFullfilled, onRejected)
// => truyền vào 2 argument: onFullfilled, onRejected.
function makePromise(buyIphone) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (buyIphone) {
        resolve("Oh yeah I have new Iphone");
      } else {
        reject("Oh no, I dont have new Iphone");
      }
    }, 1000);
  });
}
// onFullfilled -> resolve
// onRejected -> reject
let haveIphone = makePromise(false);
haveIphone
  .then(
    // (success) => console.log(success)
    (success) => {
      console.log(success);
      console.log("Im still happy");
    },
    // undefined: nếu một trong hai cái argument onFullfilled, onRejected mà muốn bỏ một cái thì phải để undefined.
    (reason) => console.log(reason)
  )
  .catch((error) => {
    // Những vấn đề xử lý lỗi nằm ở trong này
    console.log(error);
    // console.log("Im still happy");
  })
  .finally(() => {
    console.log("Im still happy");
  });

// +++
// catch:
// => Dùng để bắt lỗi.
// => Bắt vào trường hợp Rejected.
// => Dùng nối tiếp vào then.
// => Khi lời hứa được thực hiện thì nó chạy vào then còn lời hứa mà thất bại thì chạy vào catch.

// +++
// finally:
// => cho dù lời hứa then thanh công hay thất bại catch thì nó vẫn sẽ chạy vào finally.

// +++
// Exercise:
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1. run the first time");
  }, 3000);
})
  .then((data) => {
    console.log(data);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("2. run the second time");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("3. run the third time");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data); // => data ở đây chính là resolve trước đó
  });

// setTimeout(() => {
//   console.log("run the first time");
//   setTimeout(() => {
//     console.log("run the second time");
//     setTimeout(() => {
//       console.log("run the third time");
//       setTimeout(() => {
//         console.log("run the fourth time");
//         setTimeout(() => {
//           console.log("run the fifth time");
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000)

// 15.7. Promise.all
// => Phương thức tĩnh Promise.all() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả về này hoàn thành khi tất cả các lời hứa của đầu vào hoàn thành (bao gồm cả khi một lần lặp trống được thông qua), với một mảng các giá trị hoàn thành. Nó từ chối khi bất kỳ lời hứa nào của đầu vào từ chối, với lý do từ chối đầu tiên này.
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
/**
 * Hàm trả về một lời hứa sẽ giải quyết bằng một chuỗi đã cho sau khoảng thời gian hẹn giờ đã chỉ định.
 * @param [timer=1000] - Tham số bộ hẹn giờ là thời gian tính bằng mili giây mà hàm sẽ
 * đợi trước khi giải quyết lời hứa.
 * @param str - Tham số `str` là một chuỗi sẽ được trả về dưới dạng giá trị đã phân giải của
 * Lời hứa sau khoảng thời gian `hẹn giờ` được chỉ định.
 * @returns Hàm `makeTimer` đang trả về một đối tượng Promise giải quyết bằng `str`
 * tham số sau một khoảng thời gian `timer` được chỉ định.
 */
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
/* Đoạn mã trên đang tạo ba bộ định thời bằng hàm `makeTimer` với các khoảng thời gian khác nhau
(1000ms, 2000ms và 3000ms) và nhãn ("lần đầu tiên", "lần thứ hai" và "lần thứ ba"). Sau đó nó
sử dụng `Promise.all` để đợi cả ba bộ tính giờ kết thúc và ghi dữ liệu (một mảng các nhãn)
đến bàn điều khiển. */
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
  //   console.log(data);
});

// 15.8. Promise.race
// => Phương thức tĩnh Promise.race() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả lại này ổn định với trạng thái cuối cùng của lời hứa đầu tiên được giải quyết.
// => nó trả về cái nhanh nhất
/* Đoạn mã trên đang tạo một Lời hứa sẽ giải quyết với giá trị của Lời hứa đầu tiên
phân giải giữa các Lời hứa `timer1`, `timer2` và `timer3`. Khi Lời hứa đầu tiên được giải quyết,
Phương thức `then` được gọi với giá trị được giải quyết làm đối số và nó ghi giá trị vào
bảng điều khiển. */
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
  console.log(data);
});

// 15.9. Promise.allSettled
// => Phương thức tĩnh Promise.allSettled() lấy một lần lặp lại các lời hứa làm đầu vào và trả về một Lời hứa duy nhất. Lời hứa được trả lại này hoàn thành khi tất cả các lời hứa của đầu vào ổn định (bao gồm cả khi một lần lặp trống được thông qua), với một mảng các đối tượng mô tả kết quả của mỗi lời hứa.
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
/**
 * Chức năng kiểm tra xem một người có phải là frontend developer hay không dựa trên việc họ có biết HTML hay không.
 * Ngôn ngữ @param - một mảng ngôn ngữ lập trình mà nhà phát triển biết.
 * @returns Một đối tượng Promise đang được trả lại.
 */
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
/* Đoạn mã trên đang định nghĩa hai biến `dev1` và `dev2` và gọi hàm `isFrontendDev`
với một mảng các kỹ năng làm đối số cho mỗi biến. Chức năng dự kiến ​​​​sẽ trả về một
giá trị boolean cho biết nhà phát triển có phải là nhà phát triển giao diện người dùng hay không dựa trên kỹ năng của họ.
Biến đầu tiên `dev1` đang truyền một mảng gồm hai kỹ năng "html" và "css" và biến thứ hai
`dev2` đang chuyển một mảng gồm một kỹ năng "css". */
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//   console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//   console.log(data);
// });
/* Đoạn mã trên đang tạo một Lời hứa sẽ giải quyết khi tất cả các Lời hứa trong mảng `[dev1, dev2]`
đã giải quyết (hoặc hoàn thành hoặc từ chối). Sau khi Promise được giải quyết, phương thức `then` là
được gọi với tham số `data`, là một mảng các đối tượng biểu thị trạng thái ổn định của
mỗi Lời hứa trong mảng ban đầu. Đoạn mã sau đó ghi mảng này vào bảng điều khiển. */
const devRace = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});

// 15.10. try catch
// => Câu lệnh try...catch bao gồm một khối try và một khối catch, một khối finally hoặc cả hai. Mã trong khối thử được thực thi trước và nếu nó đưa ra một ngoại lệ, mã trong khối bắt sẽ được thực thi. Mã trong khối cuối cùng sẽ luôn được thực thi trước khi luồng điều khiển thoát khỏi toàn bộ cấu trúc.
// try(cố gắng làm 1 việc gì đó), catch(bắt lỗi)
/**
 * Hàm kiểm tra xem "html" có được bao gồm trong một mảng ngôn ngữ hay không và trả về lời hứa rằng
 * giải quyết với thông báo "Bạn là nhà phát triển giao diện người dùng" sau 1 giây chậm trễ.
 * Ngôn ngữ @param - một mảng ngôn ngữ lập trình mà nhà phát triển biết.
 * @returns Một đối tượng Promise đang được trả lại.
 */
function isFrontendDev2(languages) {
  if (!languages.includes("html")) {
    throw new Error("You are not Frontend developer");
  }
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
/* Đoạn mã trên đang cố gọi hàm `isFrontendDev2` với đối số mảng là
`["css"]`. Chức năng này dự kiến ​​​​sẽ trả về một lời hứa sẽ giải quyết bằng một số dữ liệu hoặc
từ chối với một lỗi. Sau đó, mã sẽ ghi dữ liệu đã giải quyết hoặc lỗi đã bắt được vào bảng điều khiển. Nếu như
có lỗi ném vào khối thử hay không, mã sẽ luôn ghi "demo" vào bàn điều khiển
sử dụng khối `cuối cùng`. */
try {
  isFrontendDev2(["css"])
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log("Oh noooooooooo");
} finally {
  console.log("demo");
}

// 15.11. async await
// => Giúp chúng ta code được clean hơn, dễ nhìn hơn chứ không phải để thay thế promise
/**
 * Hàm "chờ" trả về một lời hứa sẽ giải quyết sau một khoảng thời gian xác định.
 * @param [timer=0] - Tham số bộ hẹn giờ là một số biểu thị lượng thời gian trong
 * mili giây mà chức năng sẽ đợi trước khi giải quyết lời hứa. Nếu không có giá trị được cung cấp cho
 * Tham số bộ hẹn giờ, nó mặc định là 0, có nghĩa là chức năng sẽ ngay lập tức giải quyết
 * hứa.
 * @returns Hàm `wait` đang trả về một đối tượng Promise.
 */
function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
// await wait(2000);
// await: chỉ sử dụng được ở bên trong function mà function đó sử dụng async

// function expression
async function run() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(1000);
  console.log("ending");
}
run();

// arrow function
const fn = async () => {};
const student = {
  fullname: async function () {},
  async calcAge() {},
  yearly: async () => {},
};

/**
 * Hàm trả về một lời hứa sẽ giải quyết bằng một chuỗi đã cho sau khoảng thời gian hẹn giờ đã chỉ định.
 * @param [timer=1000] - Tham số bộ hẹn giờ là thời gian tính bằng mili giây mà hàm sẽ
 * đợi trước khi giải quyết lời hứa.
 * @param str - Tham số `str` là một chuỗi sẽ được trả về dưới dạng giá trị đã phân giải của
 * Lời hứa sau khoảng thời gian `hẹn giờ` được chỉ định.
 * @returns Hàm `makeTimer` đang trả về một đối tượng Promise giải quyết bằng `str`
 * tham số sau một khoảng thời gian `timer` được chỉ định.
 */
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

/**
 * Chức năng tạo hai bộ hẹn giờ với thời lượng khác nhau và ghi lại thời gian hoàn thành của chúng bằng cách sử dụng
 * Lời hứa.tất cả.
 */
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  const timer2 = makeTimer(2000, "second time");
  const [a, b] = await Promise.all([timer1, timer2]);
  console.log(a, b);
  // console.log(timer1);
  // console.log(timer2);
  // const timer3 = makeTimer(3000, "third time");
}
allTimer();

/**
 * Chức năng kiểm tra xem một người có phải là frontend developer hay không dựa trên việc họ có biết HTML hay không.
 * Ngôn ngữ @param - một mảng ngôn ngữ lập trình mà nhà phát triển biết.
 * @returns Một đối tượng Promise đang được trả lại.
 */
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}

/**
 * Chức năng ghi lỗi vào bàn điều khiển.
 * @param err - Tham số `err` có khả năng là một đối tượng lỗi được truyền dưới dạng đối số cho
 * Hàm `xử lýError`. Hàm ghi đối tượng lỗi vào bảng điều khiển cho mục đích gỡ lỗi.
 */
function handleError(err) {
  console.log(err);
}

/**
 * Hàm gọi hàm isFrontendDev với một loạt các kỹ năng và ghi kết quả vào
 * bảng điều khiển.
 * @returns Hàm `go()` đang trả về giá trị của `dev1`, là kết quả của việc gọi hàm
 * Hàm `isFrontendDev()` với đối số `["html"]`. Giá trị cụ thể được trả về phụ thuộc vào
 * về việc triển khai chức năng `isFrontendDev()`.
 */
async function go() {
  const dev1 = await isFrontendDev(["html"]);
  console.log(dev1);
  return dev1;
}
// console.log(go());
go().catch(handleError);
