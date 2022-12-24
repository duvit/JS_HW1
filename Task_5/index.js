const medianNumber = 6;

let mark = "";
let dash = "";
let result = "";
let slicer = medianNumber - 1;

for (let i = 0; i < medianNumber; i++) {
  for (let j = medianNumber; j > 0; j--) {
    dash += "-";
  }

  if (i === 0) {
    mark = "#";
  } else {
    mark += "##";
  }

  result = dash.slice(0, slicer) + mark + dash.slice(0, slicer);
  slicer--;
  console.log(result);
}
