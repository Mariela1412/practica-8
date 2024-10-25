const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

function mariela() {
    rl.question('Adivina un número entre 1 y 100: ', (input) => {
        let guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            console.log('Por favor, ingresa un número válido.');
        } else if (guess < randomNumber) {
            console.log('El número es mayor. Inténtalo de nuevo.');
        } else if (guess > randomNumber) {
            console.log('El número es menor. Inténtalo de nuevo.');
        } else {
            console.log(`¡Felicidades! Adivinaste el número ${randomNumber} en ${attempts} intentos.`);
            rl.close();
            return;
        }

        mariela();
    });
}

mariela();