let userScore=0;
let compScore=0;

const userSc=document.querySelector("#user-score");
const compSc=document.querySelector("#comp-score");

const desc=document.querySelector("#detail");
const desc2=document.querySelector("#detail2");

const para=document.querySelector("#msg");
// const msgC=document.querySelector("#msg-container");

const choices=document.querySelectorAll(".choice");
const getWinner=(userWin)=>
{
    if(userWin)
    {
        userScore++;
        userSc.innerText=userScore;  
        console.log("You won");
        para.style.backgroundColor="green";
        para.innerText="You Won congratulations..";
    }
    else{
        compScore++;
        compSc.innerText=compScore;  
        console.log("computer won");
        para.style.backgroundColor="red";
        para.innerText="Computer Won better Luck next time..";
    }
}
const checkWinner=(userCh,compCh)=>
{
    if(userCh==compCh)
    {
        console.log("Match is draw...");
        para.innerText="match was draw";
        para.style.backgroundColor="black"
        getDetail(userCh,compCh);
    }
    else
    {
        let userWin=true;
        if(userCh=="rock")
        {
            getDetail(userCh,compCh);
            userWin=compCh=="paper"? false:true;
        }
        else if(userCh=="paper")
        {
            getDetail(userCh,compCh);
            userWin=compCh="scissors"? false:true;
        }
        else
        {
            getDetail(userCh,compCh);
            userWin=compCh="rock"? false:true;
        }
        getWinner(userWin);
    }
}
/*
//My Code 
else if(userCh=="rock")
    {
        //paper, scissors
        if(compCh=="paper")
        {
            compScore++;
            compSc.innerText=compScore;  
            console.log("computer won");
            para.innerText="Computer Won Game";
        }
        else
        {
            userScore++;
            userSc.innerText=userScore;
            console.log("user won");
            para.innerText="You Win";
        }
    }
    else if(userCh=="paper")
    {
        //rock, scissors
        if(compCh=="rock")
        {
            userScore++;
            userSc.innerText=userScore;
            console.log("user won");
            para.innerText="You Win";
        }
        else
        {
            compScore++;
            compSc.innerText=compScore;
            console.log("computer won");
            para.innerText="Computer Won Game";
        }
    }
    else
    {
        //rock,paper
        if(compCh=="rock")
        {
            compScore++;
            compSc.innerText=compScore;
            console.log("computer won");
            para.innerText="Computer Won Game";
        }
        else
        {
            userScore++;
            userSc.innerText=userScore;
            console.log("user won");
            para.innerText="You Win";
        }
    }
}*/
const getCompChoice=()=>
{
    let pattern=["rock","paper","scissors"];
    let option=Math.floor(Math.random()*3);
    return pattern[option];
}
const userChoice=(userCh)=>
{
    console.log("User Choice is:",userCh);
    let compCh=getCompChoice();
    console.log("Computer Choice is:",compCh);
    checkWinner(userCh,compCh);
}
choices.forEach((options)=>
{
    options.addEventListener("click",()=>
    {
        let userCh=options.getAttribute("id");
        userChoice(userCh);
    });
});

const btn=document.querySelector("button");

btn.addEventListener("click",()=>
{
    userSc.innerText="0";
    compSc.innerText="0";
    para.style.backgroundColor="black";
    para.innerText="Play Your Move again";
    desc.innerText="";
    desc2.innerText="";
})

const getDetail=(userCh,compCh)=>
{
    desc.innerText=`User Choice:${userCh}`;
    desc2.innerText=`Comp Choice:${compCh}`;    
}