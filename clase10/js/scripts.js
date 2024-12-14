console.log("externo");
var mascota=prompt("ingrese nombre del perro");
        console.log("la mascota es: ",mascota);

        var numero=prompt("ingrese edad: ");
        //para convertir a un valor
        console.log(typeof numero);
        numero=Number(numero);
        console.log(typeof numero);
        numero=parseInt(numero);
        console.log(typeof numero);
        console.log("hay, ${numero}");
        
        
        
        
        
        if(numero>=18){
            console.log(`Hola, ${numero} . mayor` );
        }
        else{
            console.log("sos menor");
        }