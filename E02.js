let average = () => {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
        sum = sum + parseInt(prompt(`Ingrese la nota de su examen Nro.${i+1}:`));
    }
    return sum / 4;
}

console.log(average());
