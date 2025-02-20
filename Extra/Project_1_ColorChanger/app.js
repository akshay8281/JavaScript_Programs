const buttons = document.querySelectorAll(".button");
// console.log(btn);
const body = document.querySelector("body");
const resetButton = document.querySelector("#resetBtn");
const head = document.querySelector(".heading");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "orange") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "purple") {
      body.style.backgroundColor = event.target.id;
    }
    if (
      event.target.id === "red" ||
      event.target.id === "yellow" ||
      event.target.id === "orange" ||
      event.target.id === "purple"
    ) {
      head.style.backgroundColor = "black";
      head.style.color = "white";
      head.style.padding = "15px 25px";
      head.style.borderRadius = "15px";
    }
  });
});

resetButton.addEventListener("click", function (event) {
  console.log(resetButton);
  if (event.target.id === "resetBtn") {
    body.style.backgroundColor = "white";
    head.style.backgroundColor = "white";
    head.style.color = "black";
    head.style.padding = "15px 25px";
    head.style.borderRadius = "15px";
  }
});
