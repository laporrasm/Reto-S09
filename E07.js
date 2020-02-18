let mtsToInches = mts => `${mts} meters in inches is ${mts * .0254} inches`;

let m = prompt("Enter the quantity in meters:");

alert(mtsToInches(m));