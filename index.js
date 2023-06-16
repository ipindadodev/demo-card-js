'use strict'

    // Vamos a crear una variable que extraiga el primer número de la tarjeta, para identificar el proveedor.

    firstNumber = parseInt(document.getElementById(txtcn1));

    switch (firstNumber) {
        case firstNumber == 1:
            document.write("It works!")
            break;
        
        case firstNumber == 2:
            document.write("It works!")
            break;

        case firstNumber == 3:
            // American Express
            document.write("It works!")
            break;
        
        case firstNumber == 4:
            // Visa
            document.write("It works!")
            break;

        case firstNumber == 5:
            // Mastercard
            document.write("It works!")
            break;

        case firstNumber == 6:
            // Discovery Card
            document.write("It works!")
            break;
    }