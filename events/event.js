//Event Handlers

// let button = document.querySelector("button");
// button.onclick = (event) => {
//     console.log("Button Clicked...");
//     console.log(event.type);
//     console.log(event.clientX, event.clientY);
// }


//Event Listeners

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - handler1")
// })

// btn.addEventListener("click", () => {
//     console.log("Button was clicked - handler2")
// })

// //remove event handlers
// let handler3 = () => {
//     console.log("Button was clicked - handler3")
// }

// btn.removeEventListener("click", handler3)



// QN. Create a toggle button that changes the screen to dark-mode when
// clicked and light-mode when clicked again

// let btn = document.querySelector("#toggle");
// let body = document.querySelector("body");

// let darkMode = false;

// btn.addEventListener("click", () => {
//     if (darkMode) {
//         // Switch to light mode
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         btn.textContent = "Switch to Dark Mode";
//     } else {
//         // Switch to dark mode
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         btn.textContent = "Switch to Light Mode";
//     }
//     darkMode = !darkMode;
// });
