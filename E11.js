let calculateBonus = years => (years <= 5) ? `Your bonus is $${years * 100}` : `Your bonus is $1000`;

let b = prompt("Enter the amount of years:");

alert(calculateBonus(b));