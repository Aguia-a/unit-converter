const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

/*      Iniciar o Site com Valor 20 Apenas para Demonstração       */
let value = 20;                                                   //#
inputEl.value = value;                                            //#
render();                                                         //#
/*#################################################################*/

// Ouvir Cliques no Botão de Conversão
convertBtn.addEventListener("click", function() {
    value = Number(inputEl.value); // Converte o Valor do Input para Número
    errorCheck(value); // Verifica se o Valor é Válido e renderiza as Conversões
});

// Função de Conversão de Metros | Pés
function MeterFeet (arg, val) {
    //ARG 1 = Meters to Feet
    //ARG 2 = Feet to Meters
    switch (arg) {
        case 1: return ( (val * 3.2808399) ).toFixed(3);

        case 2: return ( (val / 3.2808399) ).toFixed(3);
    }
}

// Função de Conversão de Litros | Galões
function LiterGallon (arg, val) {
    //ARG 1 = Liters to Gallons
    //ARG 2 = Gallons to Liters
    switch (arg) {
        case 1: return ( (val * 0.26417205) ).toFixed(3);
        
        case 2: return ( (val / 0.26417205) ).toFixed(3);
    }
}

// Função de Conversão de Quilos |  Libras
function KiloPound (arg, val) {
    //ARG 1 = Kilograms to Pounds
    //ARG 2 = Pounds to Kilograms
    switch (arg) {
        case 1: return ( (val * 2.20462262) ).toFixed(3);

        case 2: return ( (val / 2.20462262) ).toFixed(3);
    }
}

// Funcão de Renderização das Conversões
function render() {
    lengthEl.textContent = `${value} meters = ${MeterFeet(1, value)} feet | ${value} feet = ${MeterFeet(2, value)} meters`;
    volumeEl.textContent = `${value} liters = ${LiterGallon(1, value)} gallons | ${value} gallons = ${LiterGallon(2, value)} liters`;
    massEl.textContent = `${value} kilos = ${KiloPound(1, value)} pounds | ${value} pounds = ${KiloPound(2, value)} kilos`;
}

// Função de Verificação de Erros
// Verifica se o Valor é Válido e Renderiza as Conversões
function errorCheck(val) {
    if (!val || val < -9999  || val > 9999) {
        alert("Please enter a valid number between -9999 and 9999 and different from 0.");
        inputEl.value = "";
    } else {
        render();
    }
}