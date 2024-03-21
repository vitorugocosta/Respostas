function inverte(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

let minhaString=prompt("Escreva uma frase: ")
let stringInvertida = inverte(minhaString);
alert(stringInvertida);