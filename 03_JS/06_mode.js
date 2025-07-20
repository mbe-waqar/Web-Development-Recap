let newBtn = document.querySelector("#mode");
let mode = "light";

newBtn.addEventListener("click", () => {
    if (mode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mode = "dark";
        newBtn.innerText = "Switch to Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode = "light";
        newBtn.innerText = "Switch to Dark Mode";
    }
});