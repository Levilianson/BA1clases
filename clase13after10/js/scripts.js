
var container=document.getElementById("container");

var nuevaP=document.createElement("p");

nuevaP.textContent="nueva P creada en JS";

container.insertBefore(nuevaP,container.firstChild);