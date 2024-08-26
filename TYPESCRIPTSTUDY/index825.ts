let title = document.querySelector("#title");
if (title != null) {
  title.innerHTML = "반가워요1";
  console.log("반가워요1");
}

if (title instanceof Element) {
  title.innerHTML = "반가워요2";
  console.log("반가워요2");
}

title = document.querySelector("#title") as Element;
title.innerHTML = "반가워요3";
console.log("반가워요3");
//as 키워드는 비상상황용, 자주쓰면 TS 의미가 희석

title = document.querySelector("#title");
if (title?.innerHTML != undefined) {
  title.innerHTML = "반가워요4";
  console.log("반가워요4");
}

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

let button = document.querySelector("#button");
button?.addEventListener("click", function () {});

let img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
  img.src = "new.jpg";
}

let 링크 = document.querySelectorAll(".naver");

링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

class Person1 {
  data: number = 0;
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  myfunc(a: string) {
    console.log("안녕" + a);
  }
}

// Person1.prototype.myfunc = () => {

// }

let man1 = new Person1("kim");
let man2 = new Person1("park");

console.log(man1.data);
man1.myfunc("ㅋㅋ");

class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): void {
    console.log(this.price / 10);
  }
}

let car1 = new Car("소나타", 3000);
car1.tax();

class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let numbers: number[] = [];
    let words: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        words.push(i);
      } else {
        numbers.push(i);
      }
    });

    this.num = numbers;
    this.str = words;
  }
}

let obj1 = new Word("kim", 3, 5, "park");
console.log(obj1.num); //[3,5]
console.log(obj1.str); //['kim', 'park']

interface Square {
  color: string;
  width: number;
}

let square: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let student: Student = { name: "kim," };
let teacher: Teacher = { name: "kim", age: 20 };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}

let cart: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface ExtendedCart extends Cart {
  card: boolean;
}

let extendedcart: ExtendedCart = {
  product: "청소기",
  price: 7000,
  card: false,
};

interface Mathz {
  plus: (a: number, b: number) => number,
  minus: (a: number, b: number) => number,
}

let myobj1 : Mathz = {
  plus(a, b) {
    return a+b
  },
  minus(a, b) {
    return a-b
  },
}