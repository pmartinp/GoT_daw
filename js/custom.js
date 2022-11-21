"use strict"

let slider = document.getElementById("rangoTemperatura");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function comprobarNombre() {
  let nomForm = document.getElementById("inputName").value;
  
  if(nomForm.match(/[^a-zA-Z]/)){
    alert(nomForm);
  }
}