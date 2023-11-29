var numero1 = document.getElementById("input");
var buton = document.getElementById("calcular");
var resultado = document.getElementById("peso_final");

function calculo(){
    return resultado.innerHTML = parseInt(numero1.value)*0.37+" Kg"
};

buton.addEventListener("click",calculo);
