// 4 pillars of DOM Manipulation

// 1. Selecting elements
var a = document.querySelector("h1");
console.log(a);

// 2. chang in HTML
a.innerHTML = "changed HTML";

// 3. change in CSS
a.style.color = "red";

// 4. Adding event listeners
a.addEventListener("click", function () {
  a.innerHTML = "You clicked me!";
  a.style.color = "blue";
  console.log("Element clicked!");
});
