
function Clicado() {
    let numero1 = parseInt(prompt("Inira um numero"));
    let operador = prompt("Inira uma das opções ' + - / * '");
    let numero2 = parseInt(prompt("Inira um numero"));

    return Calculos(numero1, numero2, operador);
}

function Calculos(n1, n2, op) {
    switch (op) {
        case "+":
            return alert(n1 + n2);
        case "-":
            return alert(n1 - n2);
        case "*":
            return alert(n1 * n2);
        case "/":
            return alert(n1 / n2);
        case 5:
            return alert(n1 + n2);
    }
}