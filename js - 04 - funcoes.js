var lista = [];
function inserir() {
    let valor = document.getElementById('valor').value;
    //push método de inserir
    lista.push(valor);
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}
function exibir() {
    var res = document.getElementById('res');
    //limpar antes de exibir
    res.innerHTML = "";
    for (var i = 0; i < lista.length; i++) {
        res.innerHTML += lista[i] + " - ";

    }
    document.getElementById('valor').focus();
}
function remover() {
    let valor = document.getElementById('valor').value;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == valor)
            //splice método de remover
            //1° Parâmetro do splice - item a ser removido
            //2° Parâmetro do splice - quantidade de itens a serem removidos
            lista.splice(i, 1);
    }
    document.getElementById('valor').value = "";
    document.getElementById('valor').focus();
}