var nota=3;
/*
if(nota>=9){
    console.log("Muy buen trabajo");   
}
else {
    console.log("buen trabajo");  
}
*/

if(nota>=9){
    console.log("Muy buen trabajo");   
}
else if(nota>=7){
    console.log("buen trabajo");   
}
else if (nota>=5) {
    console.log("cumple!!!"); 
}
else{
    console.log("no cumple!!!"); 
}


var dia=4;
switch(dia){
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("lunes");
        break;
    case 3:
        console.log("martes");
        break;
    case 4:
        console.log("miercoles");
        break;
    case 5:
        console.log("jueves");
        break;
    case 6:
        console.log("viernes");
        break;
    case 7:
        console.log("sabado");
        break;
    default:
        console.log("error....");
        break;
}
//operador ternario

// = operador de asignacion 
// == operador de igualacion
// === operador de igualacion pero tambien iguala los tipos

var numero=10;
var resultado= (numero % 2 === 0) ? "es par" : "es impar"
console.log(resultado)

//iteraciones.

// do --> se ejecuta al menos una vez.
// while --> puede no ejecutarse nunca.

var x=100;

do{
    console.log("Hola Mundo .. soy un do :",x);
    x++;
    //x=x+1;
}while(x<=5);


x=100;

while(x<=5){
    console.log("Hola Mundo .. soy un while :",x);
    x++; 
}

//for
for(var x=0;x<100;x++){
    console.log("Hola Mundo .. soy un for :",x);
    //h1
    //conjunto de etiquetas html
    //cards --> en donde varios los datos de las cards
}


//
let autos=["Fiat","Ford","Chevrolet","Nisan"];
//           0       1        2         3

for(var auto of autos){
    console.log(auto)
}

//defino la funcion
function saludar(){
    console.log("Hola soy una funcion......");
}

//llamo a la funcion
saludar();
console.log("-----")
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
