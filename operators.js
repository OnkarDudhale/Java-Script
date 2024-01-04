//get the input from user
let num=prompt("Enter number:");
if(num%5==0)
{
    console.log(num,"is multiple of 5..");
}
else
console.log(num,"number is not multiple of 5");

//Display grade according to there marks 
let marks=prompt("Enter marks:");
if(marks>=80 && marks<=100)
{
    console.log("Grade A");
}
else if(marks>=65 && marks<=79)
{
    console.log("Grade B");
}
else if(marks>=50 && marks<=64)
{
    console.log("Grade C");
}
else if(marks>=35 && marks<=49)
{
    console.log("Grade D");
}
else
console.log("fail");
