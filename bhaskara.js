function calcular() {

    const a = document.getElementById("a").value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const resultado = document.getElementById('resultado');

    const delta = (b * b) - 4 * a * c;

    const x1 = parseInt((-b + Math.pow(delta, 0.5)) / (2 * a));
    const x2 = parseInt((-b - Math.pow(delta, 0.5)) / (2 * a));

    if (x1 > x2) {
        resultado.value = x2 + " e " + x1;

    } else {
        resultado.value = x1 + " e " + x2;
    }

}
const button = document.getElementById('button');
button.addEventListener("click", calcular, false);