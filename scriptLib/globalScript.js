//alert button
const buttonAlert = () => {
    alert("Welcome to my portfolio. ")
}

//Hover Button method 1 (refactored)
const hoverButton = document.getElementById("btn-alert");
hoverButton.onmouseover = () => {
    hoverButton.innerText = "Hovering...";
}
hoverButton.onmouseleave = () => {
    hoverButton.innerText = "Alert Button";
}

//Hover Button method 2 with eventListeners
// const hoverText = document.getElementById("btn-alert");
// hoverText.addEventListener(
//     "mouseover", 
//     (event) => {
//         event.target.innerText = "hovering...";
//     }, false
// );
// hoverText.addEventListener(
//     "mouseout",
//     (event) => {
//         event.target.innerText = "Alert Button";
//     }, false,
// )

//footer with dynamic year display
document.getElementById("footerYear").innerHTML = new Date().getFullYear();