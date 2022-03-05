var numeros = [9, 7, 12, 6, 1];

console.log("lista de numeros: " + numeros);

function ordenarNumeros(a, b) {
    return (a - b);
}

var numerosOrdenados = numeros.sort(ordenarNumeros);

console.log("lista de numeros ordenados: " + numerosOrdenados);

var tamanho = numerosOrdenados.length;

console.log("quantidade de elementos na lista: " + tamanho);

var mediana = encontrarMediana(tamanho);

function encontrarMediana(tam) {
    if (tam %2 == 1 ) {
        return mediana = numerosOrdenados[(tam/2)-.5]
    }
}

console.log("mediana: " + mediana);