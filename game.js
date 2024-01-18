let blocks=document.querySelectorAll(".block");
let newGame=document.querySelector("#nG");
let win=document.querySelector("#winner");
// let game=document.querySelector("#game");

let turnO=true;//turn of player

let pattern=[[0,1,2],//possibilities
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

blocks.forEach(box => {
    box.addEventListener("click",()=>
    {
        win.innerText=""
        if(turnO)
        {     
        box.innerText="O";
        turnO=false;
        }
        else
        {
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });  
});
const gameOver=()=>
{
    for(let block of blocks)
    {
        block.disabled=true;
    }
}

function checkWinner()
{
    for(let p of pattern)
    {
        let fval=blocks[p[0]].innerText;
        let sval=blocks[p[1]].innerText;
        let tval=blocks[p[2]].innerText;

        if(fval!="" && sval!="" && tval!="")
        {
            if(fval==sval && sval==tval)
            {
                win.innerText=`congratulations,winner is ${fval}`;
                gameOver();
            }
        }
    }
}
const resetGame=()=>
{
    for(let block of blocks)
    {
    block.disabled=false;
    block.innerText="";
    win.innerText="";
    }
    
}
newGame.addEventListener("click",resetGame);