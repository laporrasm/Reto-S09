let cantColor = () => {
    let blanco = 0;
    let rojo = 0;
    let verde = 0;

    let numFocos = parseInt(prompt("Ingrese la cantidad de focos en inventario:"));
    let a = [];
    for (let i = 0; i < numFocos; i++) {
        a.push(prompt("Ingrese el color del foco (R para rojo, V para verde y B para blanco):"))
    }
    console.log(a);

    for (let i = 0; i < a.length; i++) {
        switch (a[i]) {
            case 'B':
                blanco = blanco + 1;
                break;
            case 'R':
                rojo = rojo + 1;
                break;
            case 'V':
                verde = verde + 1;
                break;
        }
    }

    alert(`Hay ${blanco} foco(s) color blanco, ${rojo} color rojo y ${verde} color verde.`)
}

cantColor();