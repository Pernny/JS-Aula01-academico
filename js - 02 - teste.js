window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function calcular() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = n1 + n2;
}
function btn_click() {
    calcular();
}
