let currencyForm = document.forms["currency-form"];
let rates = {};
let API = "http://api.exchangeratesapi.io/v1/latest?access_key=57ab796d4fc2a8bebf93fd9e3f525157&symbols=AED,BTC,JPY,INR,USD,QAR,EUR"
fetch(API).then(result=>{
    result.json().then(data=>{
        rates = data.rates;        
    })
})

let fromMenu = document.getElementById("c-from");
let toMenu = document.getElementById("c-to");
let resultBlock = document.getElementById("result");
currencyForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let currentValue =event.target["c-value"].value;
    let currentC = event.target["c-from"].value;
    let targetC = event.target["c-to"].value;

    let currentAmountInEuro =(1/rates[currentC])*currentValue;
    result = currentAmountInEuro*rates[targetC]
    if(result){
        result = result.toPrecision(3)
        resultBlock.innerText = currentValue+ " "+currentC +" : "+result+" "+targetC;
        resultBlock.style.display = "block";
    }

})


let apiForList = "http://api.exchangeratesapi.io/v1/symbols?access_key=57ab796d4fc2a8bebf93fd9e3f525157";

// fetch(apiForList).then((result)=>{
//     if(result.status=="200"){
//         result.json().then((data)=>{
//             console.log(data);
//             for (key in data.symbols){
//                 let txt = key+" : " +data.symbols[key];
//                 let newC = document.createElement("option");
//                 newC.text= txt;
//                 toMenu.appendChild(newC);
//                 fromMenu.appendChild(newC.cloneNode(true));
//             }
//         })
//     }
// })

fetch(API).then((result)=>{
    if(result.status=="200"){
//         result.json().then((data)=>{
//             console.log(data);
//             for (key in data.symbols){
//                 let txt = key+" : " +data.symbols[key];
//                 let newC = document.createElement("option");
//                 newC.text= txt;
//                 toMenu.appendChild(newC);
//                 fromMenu.appendChild(newC.cloneNode(true));
//             }
//         })

    }
})