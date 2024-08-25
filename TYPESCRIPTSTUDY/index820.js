var myname = 213;
myname = "kim";
function myfun(x) {
    return x * 2;
}
var john = [123, true];
var Tom = { nghjame: "lim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var members = [1, "2", 3];
var obj = { a: 123 };
var mymyname;
mymyname = 123;
mymyname = [123, 123, 123];
var mymymyname;
mymymyname = 123;
mymymyname = "12";
var variable1;
if (typeof mymymyname === "string") {
    variable1 = mymymyname;
}
else {
    throw new Error("mymymyname은 문자열이 아닙니다");
}
var var2 = 1;
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
var name1 = "kim";
var age1 = 50;
var isMaried = undefined;
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
function myfun2(x) {
    1 + 1;
}
myfun2();
function naming(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function counting(x) {
    if (typeof x === "number") {
        var digitCount = x.toString().length;
        return digitCount;
    }
    else if (typeof x === "string") {
        var length_1 = x.length;
        return length_1;
    }
}
function marrying(x, y, z) {
    var score;
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
function 내함수(x) {
    var array = [];
    array[0] = x;
}
function cleaning(x) {
    var done = [];
    x.forEach(function (y) {
        if (typeof y === "string") {
            done.push(parseFloat(y));
        }
        else {
            done.push(y);
        }
    });
    return done;
}
console.log(cleaning([123, "2"]));
function teaching(subj) {
    if (typeof subj.subject == "string") {
        return subj.subject;
    }
    else if (Array.isArray(subj.subject)) {
        return subj.subject[subj.subject.length - 1];
    }
}
console.log(teaching({ subject: "math" })); //이 경우 'math'를 return
console.log(teaching({ subject: ["science", "art", "korean"] })); //이 경우 'korean'을 return
var animal = "kim ";
var animal2 = { name: "kim", age: 20 };
var girlfriend = {};
girlfriend.name = "yura";
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3],
};
var 회원가입정보 = {
    name: "kim",
    mizza: false,
    phone: 1234,
};
var name3;
var Itsme;
Itsme = "solo";
function func1(a) {
    return 1;
}
func1("hello");
function rsp(inp) {
    return ["paper"];
}
var myfun3 = function (a) {
    //함수 표현식
    return 10;
};
var membership = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
membership.plusOne(2);
var member = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
function func3(a) {
    a();
}
function func4() { }
func3(func4);
