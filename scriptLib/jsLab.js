//alert button
const buttonAlert = () => {
    alert("Welcome to my portfolio. ");
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


//increment starts at 0, +1/click
let count = 0;
let text = document.getElementById("counterText");
document.getElementById("btn-counter").onclick = () => {
    count++;
    document.getElementById("counterText").innerHTML = count;
    //sanity check
    console.log("logged: " + count);
    //even/odd
    if ((count%2) == 0) {
        text.classList.remove("odd");
        text.classList.add("even");
        // text.style.color = "pink";
    }
    else {
        // text.style.color = "cyan";
        text.classList.remove("even");
        text.classList.add("odd");
    }

}

//for loop
for (let i = 0; i < 100; i++){
    const node = document.createElement('li');
    let EoO;
    if ((i+1)%2 == 0){
        EoO = "even";
        node.classList.add("even");
    }
    else {
        EoO = "odd";
        node.classList.add("odd");
    }
    node.textContent = EoO;
    document.getElementById("numbers").appendChild(node);
}
