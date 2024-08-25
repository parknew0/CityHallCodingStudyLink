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
