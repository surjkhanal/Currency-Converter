let currencyForm = document.forms["currency-form"];
let rates = {};
let API = 'https://freecurrencyapi.net/api/v2/latest?apikey=f039b260-2bf0-11ec-b48b-818b8551d36b&base_currency=inr'


let fromMenu = document.getElementById("c-from");
let toMenu = document.getElementById("c-to");
let resultBlock = document.getElementById("result");
let exchangeBlock = document.getElementById("exchange");
currencyForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let currentValue =event.target["c-value"].value;
    let currentC = event.target["c-from"].value;
    let targetC = event.target["c-to"].value;

    let API = 'https://freecurrencyapi.net/api/v2/latest?apikey=f039b260-2bf0-11ec-b48b-818b8551d36b&base_currency='+currentC

    fetch(API).then(result=>{
        result.json().then(data=>{
            rates = data.data; 
            console.log(rates);
            result = rates[targetC]*currentValue;
            if(result){
                result = result.toPrecision(5)
                console.log(result)
                resultBlock.innerText = currentValue+ " "+currentC +" : "+result+" "+targetC;
                resultBlock.style.display = "block";
                exchangeBlock.innerText = 1+ " "+currentC +" : "+rates[targetC]+" "+targetC;
                exchangeBlock.style.display = "block";
            }

        })
    })
})


let showCaseSelect = document.querySelector("#compare-select-currency") ;
let showCaseResult = document.querySelector("#showcase-result") ;
showCaseSelect.addEventListener("change",(event) => {

    let API = 'https://freecurrencyapi.net/api/v2/latest?apikey=f039b260-2bf0-11ec-b48b-818b8551d36b&base_currency='+event.target.value;
    showCaseResult.innerHTML = "";
    fetch(API).then((response)=>{


        response.json().then((data)=>{
            console.log(data)
            let c=["EUR","INR","AED","JPY","USD","QAR","BTC"]
            c.forEach(currency=>{
                if(currency!==event.target.value){
                    let child= document.createElement('span');
                    child.className = "box";
                    child.textContent =data.data[currency].toPrecision(5) +" "+currency;
                    showCaseResult.appendChild(child);
                }
            })

            
        })
    })


})
