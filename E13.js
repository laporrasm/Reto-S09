let readGrades = () => {
    let numOfGrades = parseInt(prompt("Enter the amount of grades:"));
    let a = [];
    let grade;
    let passed = 0;
    let failed = 0;

    for (let i = 0; i < numOfGrades; i++) {
        grade = parseInt(prompt("Enter a grade"));
        a.push(grade);

        (grade > 10.5) ? passed++ : failed++;
    }

    alert(`${passed} student(s) passed, ${failed} failed.`);
}

readGrades();