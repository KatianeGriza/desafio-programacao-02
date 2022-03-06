var result = [];

var n = [4, 8, 2, 10, 6];

const x = 4;

n.forEach((element) => {
    const value = element + x;
    n.forEach(internalElement => {
        if (internalElement === value) {
            result.push("[" + value.toString() + "," + element.toString() + "]")
        }
    });
});

console.log("pares de inteiro com diferenca de 4: " + result);