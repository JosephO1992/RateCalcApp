const inputRate = document.querySelector("input.rate");
const inputOnCosts = document.querySelector("input.onCosts");
const inputMargin = document.querySelector("input.margin");
const calculateButton = document.querySelector("button.calculate");
const form = document.querySelector("form");
const outPut = document.querySelector(".answer");
// const incSuper = document.querySelector(".inc");
// const exclSuper = document.querySelector(".excl");
// const checkBoxArr = [incSuper, exclSuper];

let numInputRate;
let numInputOnCosts;
let numInputMargin;
let percentOncosts;
let finalDayRate;

function convertToNum(inputString) {
	// This function takes the inputs and converts them to numbers as they are strings by default
	let strV = inputString.value;
	let numV = parseInt(strV);
	return numV;
}

function convertToPercentage(Oncosts) {
	// This takes in the oncosts input and converts to a %
	percent = Oncosts / 100;
	numPercent = parseFloat(percent);
	return numPercent;
}

function totalDayRate(rate, percentage, margin) {
	// This function takes in the aleady converted inputs, then multiplies and returns the total figure
	// I will wrap this in an IF to make sure the % on costs are less than 100
	let finalPercent = percentage + 1;

	let totalRate = rate * finalPercent + margin;
	return totalRate;
}

function checkboxlimit(checkgroup, limit) {
	let checkGroupToCheck = checkgroup;
	let checkBoxLimit = limit;
	for (let i = 0; i < checkGroupToCheck.length; i++) {
		let count = 0;
		if (checkGroupToCheck[i].checked) {
			count += 1;
			if (count > checkBoxLimit) {
				console.log("too many checkboxes ticked");
			}
		}
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let numInputRate = convertToNum(inputRate);
	let numInputOnCosts = convertToNum(inputOnCosts);
	let numInputMargin = convertToNum(inputMargin);
	let percentOncosts = convertToPercentage(numInputOnCosts);
	let finalDayRate = totalDayRate(numInputRate, percentOncosts, numInputMargin);
	outPut.value = finalDayRate;
});
