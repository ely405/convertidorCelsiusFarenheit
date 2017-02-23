function conviertirACelsius(){
  var valFarenheit = document.getElementById("farenheit").value - 32 * 5/9;
  document.getElementById("celsius").value = Math.round(valFarenheit);
}
function convertirAFarenheit(){
  var valCelsius = document.getElementById("celsius").value * 9/5 + 32;
  document.getElementById("farenheit").value = Math.round(valCelsius);
}
