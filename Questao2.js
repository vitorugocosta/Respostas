function Fibonacci(numero) {
  
    let a = 0;
    let b = 1;
    
    
    if (numero === 0 || numero === 1) {
        return true;
    }

    
    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        let soma = a;
        a = b;
        b = soma + b;
    }

   
    return false;
}


function fim() {
    let numero = parseInt(prompt("Digite um número para verificar se pertence a sequência de Fibonacci: "));
    
    
    if (Fibonacci(numero)) {
        alert(`O número ${numero} pertence a sequência de Fibonacci.`);
    } else {
        alert(`O número ${numero} não pertence a sequência de Fibonacci.`);
    }
}


fim();
