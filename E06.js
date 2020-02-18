let calculateSalary = (workedHours, salaryPerHr) => `Your salary for this week is $${workedHours * salaryPerHr}`;

let wh = prompt("Enter your worked hours for this week:");
let sph = prompt("Enter your salary per hour:");

console.log(calculateSalary(wh, sph));