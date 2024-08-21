type Mytype = string | number;

let myname: Mytype = 213;

myname = "kim";

function myfun(x: number): number {
  return x * 2;
}

type Member = [number, boolean];

let john: Member = [123, true];

type MMember = {
  [key: string]: string;
};

let Tom: MMember = { nghjame: "lim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let members: (number | string)[] = [1, "2", 3];

let obj: { a: string | number } = { a: 123 };

let mymyname: any;

mymyname = 123;
mymyname = [123, 123, 123];

let mymymyname: unknown;

mymymyname = 123;
mymymyname = "12";

let variable1: string;

if (typeof mymymyname === "string") {
  variable1 = mymymyname;
} else {
  throw new Error("mymymyname은 문자열이 아닙니다");
}

let var2: unknown = 1;

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

let name1: string = "kim";

let age1: number = 50;

let isMaried: undefined = undefined;

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

function myfun2(x?: number): void {
  1 + 1;
}

myfun2();

function naming(x?: string) {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("이름이 없습니다.");
  }
}

function counting(x: number | string) {
  if (typeof x === "number") {
    let digitCount = x.toString().length;

    return digitCount;
  } else if (typeof x === "string") {
    let length = x.length;

    return length;
  }
}

function marrying(x: number, y: boolean, z: string): string {
  let score: number;
  score = x;

  if (y) {
    score += 500;
  }
  if (z === "상") {
    score += 100;
  }

  if (score >= 600) {
    return "결혼가능";
  }
}

console.log(marrying(100, true, "상"));
console.log(marrying(3000, true, "상"));

function 내함수(x: number | string) {
  let array: number[] = [];

  array[0] = x as number;
}

function cleaning(x: (string | number)[]) {
  let done: number[] = [];

  x.forEach((y) => {
    if (typeof y === "string") {
      done.push(parseFloat(y));
    } else {
      done.push(y);
    }
  });

  return done;
}

console.log(cleaning([123, "2"]));

function teaching(subj: { subject: string | string[] }) {
  if (typeof subj.subject == "string") {
    return subj.subject;
  } else if (Array.isArray(subj.subject)) {
    return subj.subject[subj.subject.length - 1];
  }
}

console.log(teaching({ subject: "math" })); //이 경우 'math'를 return
console.log(teaching({ subject: ["science", "art", "korean"] })); //이 경우 'korean'을 return

type Animal = string | number | undefined;
let animal: Animal = "kim ";

type Animal2 = { name: string; age: number };
let animal2: Animal2 = { name: "kim", age: 20 };

type GirlfriendType = {
  name?: string;
};

const girlfriend: GirlfriendType = {};

girlfriend.name = "yura";

type Name2 = string;
type Age2 = number;

type Person = Name2 | Age2;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; // { x : number, y: number}

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type Homework2 = {
  color?: string;
  size: number;
  readonly position: number[];
};
let 테스트용변수: Homework2 = {
  size: 123,
  position: [1, 2, 3],
};

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Homework3 = {
  name: string;
  phone: number;
  email?: string;
};

// (숙제4) 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type IsMinzza = { mizza: boolean };

type Homework4 = IsMinzza & Homework3;

let 회원가입정보: Homework4 = {
  name: "kim",
  mizza: false,
  phone: 1234,
};

let name3: 123;

let Itsme: "bald" | "solo";

Itsme = "solo";

function func1(a: "hello"): 1 | 0 {
  return 1;
}

func1("hello");

function rsp(inp: "rock" | "siccor" | "paper"): ("rock" | "siccor" | "paper")[] {
  return ["paper",];
}


const 