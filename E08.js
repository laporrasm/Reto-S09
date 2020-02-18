let solesToDollars = soles => `With S/.${soles} you can get $${soles / 3.39}`;

let s = prompt('Enter the amount of soles you got:');

alert(solesToDollars(s));