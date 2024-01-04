let size=100;
for(let i=0;i<size;i++)
{
    if(i%2==0)
    console.log("even numbers=",i);
}

let guessNum=30;
let number=prompt("Guess correct number:");

while(guessNum!=number)
{
    number=prompt("Guess Correct number:");
    console.log("Wrong try again.....");
}
console.log("You Guess Correct number.....");

let fullName=prompt("Enter Username:");
size=fullName.length;
console.log("@"+fullName+size);//concatnation

//literals
console.log(`this is a literals..`);
let Name="Onkar";
let area="Shrirampur";
console.log(`He is a ${Name} live in ${area}`);

let upperCase=fullName.toUpperCase();
let lowerCase=fullName.toLowerCase();
console.log(upperCase);
console.log(lowerCase);

let part=area.slice(2,6);
console.log(part);
let con=area.concat("maharastra");
console.log(con);
let nam=Name.replace("Onkar","Dudhale");
console.log(nam);
