/**
 * enum for colors
 */
const colorList = {
    ROSSO: 'rosso',
    ARANCIONE: 'arancione',
    GIALLO: 'giallo',
    VERDE: 'verde',
    BLU: 'blu',
    VIOLA: 'viola',
    MARRONE: 'marrone',
    AZZURRO: 'azzurro',
    ROSA: 'rosa',
    BIANCO: 'bianco',
    GRIGIO: 'grigio',
    NERO: 'nero'
}

/**
 * 
 * @param {*} color - color given from the function
 * @returns true if color is in the list, else false
 */
function isValidColor(color) {
    console.log('checking');
    let refinedColor = color.replace(/\s/g, '').toUpperCase();
    console.log(colorList.hasOwnProperty(refinedColor));
    return colorList.hasOwnProperty(refinedColor);
}

/**
 * function takes all items in the html file with the class @info 
 * stores them in @arrayPass, concat all of their value in @password
 * then, changes .innerHTML of @generatedPassword .
 * @returns null
 */
function sendData() {
    let arrayPass = document.getElementsByClassName("info");
    let password = "";
    for (let i = 0; i < arrayPass.length; i++) {
        password = password + String(arrayPass[i].value);
        //checking all fields compiled
        if (arrayPass[i].value === "") {
            document.getElementById("errorContainer").innerHTML = "si prega di compilare tutti i campi";
            document.getElementById("errorContainer").style.display = "block";
            return;
        }
        //checking valid colors
        if (i === 2 && !isValidColor(arrayPass[2].value)) {
            document.getElementById("errorContainer").innerHTML = "il colore non risulta nella lista dei colori disponibili";
            document.getElementById("errorContainer").style.display = "block";
            return;
        }
    }
    //replacing spacing with nothing, Capital to lowercase
    password = password.replace(/\s/g, '').toLowerCase();
    document.getElementById("generatedPassword").innerHTML = password + "21";
    document.getElementById("errorContainer").style.display = "none";
    document.getElementById("passContainer").style.display = "block";
    return;
}

