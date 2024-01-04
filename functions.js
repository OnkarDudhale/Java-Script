//create function which returns vovels from given string
let cnt=0;
function vovels(str)
{
    for(let i of str)
    {
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
        {
           cnt++;
        }
    }
    return cnt;
}
let cont=vovels("onkarDudhale");
console.log("Number of vovels in string is:"+cont);

//for a given array elements calculate the square that numbers 
let arr=[2,6,8,9,10,12];

arr.forEach(function calculate(val)
{
    console.log(`${val} square:`+val*val);
});

arr.forEach((val)=>
{
    console.log(val+" cube:"+val**3);
});

//filter out the marks which are greater than 90 from given array
let array=[99,80,95,96,90];

let mark=array.filter((value)=>
{
    return value>90;
});
console.log(mark);

//get the input from user and create array from 0 to n
/*use reduce method to calculate sum of all numbers of an array
use reduce method to calculate product of all numbers of an array*/

let size=prompt("Enter N for create array:");
let ar=[];
for(let i=0;i<=size;i++)
{
    ar.push(i);//let i=1 ,ar[i-1]=i;
}

let sum=ar.reduce((prev,curr)=>
{
    return prev+curr;
})
console.log("sum of numbers:"+sum);

ar.shift();//delete starting 0
let product=ar.reduce((prev,curr)=>
{
    return prev*curr;
})
console.log("factorial of numbers:"+product);
