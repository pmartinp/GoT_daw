"use strict";

let slider = document.getElementById("rangoTemperatura");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

function comprobarNombre() {
  let nomForm = document.getElementById("inputName");

  if (nomForm.value.match(/[^a-zA-Z ]/)) {
    nomForm.classList.add("is-invalid");
  } else {
    nomForm.classList.remove("is-invalid");
  }
}

function validateMyForm(){
  let campoAValidar = document.getElementById("inputName");

  if (campoAValidar.classList.length>1){
    return false
  }else{
    return true
  }
}

function mostrarCasa() {
  let nombre = document.getElementById("inputName").value;
  let parrafo = document.getElementById("eleccionCasa");
  parrafo.innerText = nombre + " has sido elegido por la Casa " + elegirCasa() + " preparate para la guerra";
}

function elegirCasa(){
  let temperatura = document.getElementById("rangoTemperatura").value;
  let animales = document.getElementsByName("radioAnimal");
  let armas = document.getElementsByName("radioArma");

  let animal = "";

  // recorro los valores de los radioButton y cojo el que está "checked"
  for (const key in animales) {
    if (animales[key].checked) {
      animal = animales[key].value;
    }
  }

  let arma = "";
  for (const key in armas) {
    if (armas[key].checked) {
      arma = armas[key].value;
    }
  }

  if(animal=="lobo" || temperatura<0){
    return "Stark";
  }

  if(arma=="ballesta" && temperatura>=0){
    return "Lannister";
  }
  
  if((animal=="caballo" ||  animal=="perro") && arma!="ballesta"){
    return "Baratheon";
  }
  
  return "Targaryen";

}