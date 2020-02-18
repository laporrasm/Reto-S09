let findYounger = a => {
    let younger = {};
    let smaller = 99999;

    for (let i = 0; i < a.length; i++) {
        if (a[i].age < smaller) {
            younger = a[i];
            smaller = a[i].age;
        }
    }
    return `The younger one is ${younger.name} with ${younger.age} years of age.`;
}

let a = [];
for (let i = 0; i < 3; i++) {
    a.push( {
        name : prompt(`Enter the name of the guy N${i + 1}:`),
        age : prompt(`Enter the age of the guy N${i + 1}:`)
    });
}

alert(findYounger(a));
