console.log("hello js");
a=10;
b=20;
c=a+b;
console.log(c);
var c=40;
console.log(c);//can be update and repeat

let d=50;
console.log(d);//can not be repeat with same value
d=60;
console.log(d);//can be update

const pi=3.14;
console.log(pi);//can not be repeat and update

//object
const fName="onkar";//const object value can be change
student={
    fName:"Onkar Dudhale",
    class:"TY",
    div:"A"
};
//To access particular key value using two methods
console.log(student["fName"]);
console.log(student.fName);
