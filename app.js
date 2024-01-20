const baseURL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const ddSelect=document.querySelectorAll("#dropdown select");
const btn=document.querySelector(".but");
const fromCurr=document.querySelector("#from select");
const toCurr=document.querySelector("#to select");

for(let select of ddSelect)
{
    for(currCode in countryList)
    {
      let newOption=document.createElement("option");
      newOption.innerText=currCode;
      newOption.value=currCode;
      if(select.name==="from" && currCode==="USD") {
        newOption.selected="selected";
      }
      else if(select.name==="to" && currCode==="INR") {
        newOption.selected="selected";
      }
      select.append(newOption);
    }
    select.addEventListener("change",(evt)=>
    {
      updateFlag(evt.target);
    })
}
let updateFlag=((element)=>
{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
})


btn.addEventListener("click",async(evt)=>
{
    evt.preventDefault();
    let amount=document.querySelector("#amount #in1");
    let amtVal=amount.value;
    if(amtVal=="")
    {
      amtVal=1;
      amount.value="1";
    }

const url=`${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(url);
let data=await response.json();
let rate=data[toCurr.value.toLowerCase()];
let finalRate=amtVal*rate;
let result=document.querySelector("#amount #in2");   
result.value=finalRate;
result.innerText=finalRate;
})
