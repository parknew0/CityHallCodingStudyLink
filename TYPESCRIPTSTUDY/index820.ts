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

function marrying(x: number, y: boolean, z: string) : string {
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


console.log(marrying(100,true,'상'))
console.log(marrying(3000,true,'상'))