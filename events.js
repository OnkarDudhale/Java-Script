//light and Dark mode
let btn1=document.querySelector("#but1");
btn1.addEventListener("click",(b1)=>
{
    document.body.style.backgroundColor="white";
    console.log(b1.target);
    console.log(b1.type);
});
let btn2=document.querySelector("#but2");
btn2.addEventListener("click",(b2)=>
{
    document.body.style.backgroundColor="black";
    console.log(b2.target);
    console.log(b2.type);
});

//toggle
let btn3=document.querySelector("#mode")
let currMode="light";

btn3.addEventListener("click",()=>
{
    if(currMode=="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
});

//random color
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
let btn4=document.querySelector("#random");
btn4.addEventListener("click",()=>
{
    const cb=`rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor=cb;
    console.log(cb);
})