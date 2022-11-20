"use strict"

let slider = document.getElementById("rangoTemperatura");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}