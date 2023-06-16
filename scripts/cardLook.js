'use strict'

    // Necesito, lo primero, sacar el valor del input txtcn1 parseándolo a entero, para poder operar con él.
    let cn1 = parseInt(document.getElementById("txtcn1").value);

    // Con este dato, podemos sacar el proveedor de la tarjeta.
    let proveedor = "";

    if (cn1 == 3) {
        proveedor = "American Express";
    } else if (cn1 == 4) {
        proveedor = "Visa";
    } else if (cn1 == 5) {
        proveedor = "Mastercard";
    } else if (cn1 == 6) {
        proveedor = "Discovery Card";
    };

    // Con este dato, podemos extraer el número de dígitos de la tarjeta.
    let digitos = 0;
    if (proveedor == "American Express") {
        digitos = 15;
    } else if (proveedor == "Visa" || proveedor == "Mastercard" || proveedor == "Discovery Card") {
        digitos = 16;
    }

    // A continuación, creamos en el HTML un div con id "cardNumber" que se encargará de mostrar la tarjeta.
    // Para ello, creamos un bucle que se encargue de crear los divs necesarios para mostrar los dígitos de la tarjeta.

    let cardNumber = document.getElementById("cardNumber");
    cardNumber.innerHTML = "";

    for (let i = 0; i < digitos; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cardNumber");
        div.setAttribute("id", "cardNumber" + i);
        cardNumber.appendChild(div);
    }
    
    