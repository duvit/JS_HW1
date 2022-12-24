const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let neededPacks = (consumptionPerWeek * weeksAmount) / sheetsInReamPaper;

let paperOrder = 0;

if (neededPacks % 1 === 0) {
  paperOrder = neededPacks;
} else {
  paperOrder = neededPacks + 1 - (neededPacks % 1);
}

console.log(paperOrder);

// Alternative

// let stringed = neededPacks.toString();
// stringed = stringed.slice(0, stringed.indexOf("."));
// neededPacks = +stringed + 1;

// console.log(neededPacks);
