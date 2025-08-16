var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");

var flag = 0;

button.addEventListener("click", function () {
  if (flag === 0) {
    bulb.style.backgroundColor = "#ffeb3b";
    console.log("Bulb is ON");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "#9e9e9e";
    console.log("Bulb is OFF");
    flag = 0;
  }
});
