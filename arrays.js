//find sum and average of students marks
let mark=[85,97,44,37,76,80];
let i=0,sum=0;
while(i<=mark.length-1)
{
    sum+=mark[i];
    i++;
}
console.log("sum of marks="+sum);
let average=sum/mark.length;
console.log("average of marks="+average);

//apply offer to items and display array
let items=[250,645,300,900,50];
console.log("items price before offer:");
console.log(items);
let j=0;
for(let val of items)//for of over value and for in over key
{
    let offer=val/10;
    items[j]-=offer;
    j++;
}
console.log("items price after applying offer:");
console.log(items);

items.push(100);
items.push(200);
console.log(items);
items.pop();//200
console.log(items);
console.log(items.toString());
items.unshift(10);//push
console.log(items);
items.shift();//pop
console.log(items);
items.splice(2,2,700,400);//start delete add
console.log(items);
