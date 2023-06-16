// Necesito sacar el valor del input txtcn1 y pasarlo a un entero

var cn1 = parseInt();

function cardLook() {

   var input = document.getElementById("txtcn1").value;
   var cardColor, cardProvider, cardLogo;

    // Almacernarlo para usarlo.
    localStorage.setItem("cn1", cn1);



    switch (input) {
        case "3":
            var cardColor = "#e2d18d";
            var cardProvider = "American Express";
            var cardLogo = "img/amex.svg";
            break;
        case "4":
            var cardColor = "#023e73";
            var cardProvider = "Visa";
            var cardLogo = "img/visa.svg";
            break;
        case "5":
            var cardColor = "#e9e9e9";
            var cardProvider = "Mastercard";
            var cardLogo = "img/mastercard.svg";
            break;
        case "6":
            var cardColor = "#f26101";
            var cardProvider = "Discover";
            var cardLogo = "img/discover.svg";
            break;
        default:
            var cardColor = "#e0e0e0";
            var cardProvider = "No es una tarjeta válida";
            var cardLogo = "img/invalid.svg";
            break;
        }

    var cardHolder = document.getElementById("cardHolder");
    cardHolder.style.backgroundColor = cardColor;

    cardName.innerHTML = cardProvider;

    var cardLogoDiv = document.getElementById("cardLogo");
    cardLogoDiv.innerHTML = "<img src='" + cardLogo + "'height='50px'>";

    var cardLook = document.getElementById("cardLook");
    cardLook.innerHTML = "<p>" + cardProvider + "</p>";
}