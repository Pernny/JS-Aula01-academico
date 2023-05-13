function vetor() {
    var input = document.getElementById('numero');
    var valor = parseInt(input.value);
    var divTabuada = document.getElementById('tabuada');
    for (var i = 0; i <= 10; i++) {
        divTabuada.innerHTML += `<p> ${valor} X ${i} = ${valor * i}<p>`;
    }

}