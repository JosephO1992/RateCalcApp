const inputRate = document.querySelector('input.rate');
const inputOnCosts = document.querySelector('input.onCosts');
const inputMargin = document.querySelector('input.margin');
const calculateButton = document.querySelector('button.calculate');
const form = document.querySelector('form');
const outPut = document.querySelector('.answer');

function convertToNum(inputString) {
    let strV = inputString.value;
    let numV = parseInt(strV);
    return numV;
}

 function convertToPercentage(Oncosts) {
    percent = 1 + '.' + Oncosts;
    numPercent = parseFloat(percent);
    return numPercent;
 };

 function totalDayRate(r, p, m) {
     let totalRate = (r * p) + m;
     return totalRate;
 }

form.addEventListener('submit', (e) => {
    e.preventDefault();
   let numInputRate = convertToNum(inputRate);
   let numInputOnCosts = convertToNum(inputOnCosts);
   let numInputMargin = convertToNum(inputMargin);
   let percentOncosts = convertToPercentage(numInputOnCosts);
   let finalDayRate = totalDayRate(numInputRate, percentOncosts, numInputMargin);
   outPut.textContent = finalDayRate;
   
});






