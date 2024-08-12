var button = $(".tab-button");
var content = $(".tab-content");

// button.eq(0).on("click", () => {
//   button.removeClass("orange");
//   button.eq(0).addClass("orange");

//   content.removeClass("show");
//   content.eq(0).addClass("show");
// });

// button.eq(1).on("click", () => {
//   button.removeClass("orange");
//   button.eq(1).addClass("orange");

//   content.removeClass("show");
//   content.eq(1).addClass("show");
// });

// button.eq(2).on("click", () => {
//   button.removeClass("orange");
//   button.eq(2).addClass("orange");

//   content.removeClass("show");
//   content.eq(2).addClass("show");
// });

for (let i = 0; i < 3; i++) {
  button.eq(i).on("click", () => {
    button.removeClass("orange");
    button.eq(i).addClass("orange");

    content.removeClass("show");
    content.eq(i).addClass("show");
  });
}
