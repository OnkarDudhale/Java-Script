document.body.style.background="pink";
document.body.style.color="black";

let line=document.querySelector("h2");
console.dir(line.innerText);
line.innerText=line.innerText+"\tfrom student";
//console.log(line.append("\tfrom student"));

let b=document.body.querySelectorAll(".box");
console.dir(b);
let idx=1;
for(div of b)
{
    div.innerText=`block ${idx}`;
    idx++;
}
// b[0].innerText="first block";
// b[1].innerText="Second block";
// b[2].innerText="Third block";

// let c=document.body.querySelectorAll(".box");
// c[1].style.backgroundColor="green";
// c[2].style.backgroundColor="cyan"

//Q1
let button=document.createElement("button");
button.innerText="Click Me!";

button.style.backgroundColor="red";
button.style.color="white";

document.body.prepend(button);

//Q2
let para=document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class","newClass");//this overwrite the style for content
para.classList.add("newClass");