// window.document.body.style.background = "black"
// window.document.body.style.color = "grey"

//DOM(Document Object Model) Manipulation

// let div = document.getElementsByClassName("myClass")
// console.dir(div)

// let para = document.getElementsByTagName("p")
// console.dir(para)

// let firstElm = document.querySelector("p");
// console.dir(firstElm);

// let allElm = document.querySelectorAll("p");
// console.dir(allElm);

// let button = document.getElementById("btn");
// console.dir(button)

//Qn1.
// let heading = document.querySelector("h1");
// heading.innerText = heading.innerText + " from Apna College Student";

//Qn2.
// let boxes = document.querySelectorAll(".box")
// console.dir(boxes)

// boxes[0].innerText = "hello"
// boxes[1].innerText = "Anit"
// boxes[2].innerText = "Shrestha"

//Another method using loops
// let index = 0;
// for(div of boxes){
//     div.innerText = `new unique value ${index}`;
//     index++;
// }

// DOM Part 2

//prepend
// let btn = document.createElement("button");
// btn.innerText = "Click Me";

// let div = document.querySelector(".box");
// div.append(btn)
// div.prepend(btn)
// div.before(btn);
// div.after( btn)


// let paragraph = document.querySelector("p");
// paragraph.remove();

