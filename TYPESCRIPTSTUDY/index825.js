var title = document.querySelector("#title");
if (title != null) {
    title.innerHTML = "반가워요1";
    console.log("반가워요1");
}
if (title instanceof Element) {
    title.innerHTML = "반가워요2";
    console.log("반가워요2");
}
title = document.querySelector("#title");
title.innerHTML = "반가워요3";
console.log("반가워요3");
//as 키워드는 비상상황용, 자주쓰면 TS 의미가 희석
title = document.querySelector("#title");
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = "반가워요4";
    console.log("반가워요4");
}
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () { });
var img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
var 링크 = document.querySelectorAll(".naver");
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
var Person1 = /** @class */ (function () {
    function Person1(a) {
        this.data = 0;
        this.name = a;
    }
    Person1.prototype.myfunc = function (a) {
        console.log("안녕" + a);
    };
    return Person1;
}());
// Person1.prototype.myfunc = () => {
// }
var man1 = new Person1("kim");
var man2 = new Person1("park");
console.log(man1.data);
man1.myfunc("ㅋㅋ");
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        console.log(this.price / 10);
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
car1.tax();
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numbers = [];
        var words = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                words.push(i);
            }
            else {
                numbers.push(i);
            }
        });
        this.num = numbers;
        this.str = words;
    }
    return Word;
}());
var obj1 = new Word("kim", 3, 5, "park");
console.log(obj1.num); //[3,5]
console.log(obj1.str); //['kim', 'park']
var square = { color: "red", width: 100 };
var student = { name: "kim," };
var teacher = { name: "kim", age: 20 };
var product = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var cart = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var extendedcart = {
    product: "청소기",
    price: 7000,
    card: false,
};
var myobj1 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
