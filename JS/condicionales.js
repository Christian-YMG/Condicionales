// let edad = parseInt(prompt("Escribe tu Edad"));

// let isAdult = edad >= 18
//                 ?'Eres mayor de edad'
//                 :'Te faltan años';
// alert(isAdult);






//Ciclo en donde piden la edad y si escribe un dato falsy sale del ciclo
// let edad ; 


// do {
//     edad = parseInt(prompt("Escribe tu Edad"));
//     if (edad) {
//         if (edad >= 18) {
//             alert("Eres mayor de edad")
//         }
//         else{
//             alert("Te faltan años")
//         }
//     }
//         else{
//             alert("Tu edad debe de ser un numero valido")
//             break;
//         }

// } while (edad != false);




//ciclo que pide la contraseña, hasta 3 intentos al tercer intento sale si es incorrecto
//si es correcto muestra el mensaje acceso correcto y sale del ciclo
// let contraseña = '12345'; 
// let contador = 0;
// for (let i = 0; i < 3; i++) {
//    let getContraseña =  prompt("Escribe la contraseña");
//    if (getContraseña != contraseña) {
//         contador++;

//         if (contador === 3) {
//             break;
//         }
//    }
//    else{
//        alert("Acceso correcto");
//        break;
//    }

// }



// let number = 1;
// while (number <=10) {
//     console.log(number);
//     number++;
// }



//ciclo que evalua letra y si no es valido la pide de nuevo pero si escribe r sale del programa
// let letra;
// let letraSalir = 'R'
// do {
//     letra = prompt(`Escoje una letra
// a
// b
// c
// d
// e
// Puedes escoger r para salir
// `).trim().toUpperCase();
//     switch (letra) {
//         case 'A':
//             alert(`Elegiste la opción A`);
//             break;
//         case 'B':
//             alert(`Elegiste la opción B`);
//             break;
//         case 'C':
//             alert(`Elegiste la opción C`);
//             break;
//         case 'D':
//             alert(`Elegiste la opción D`);
//             break;
//         case 'E':
//             alert(`Elegiste la opción E`);
//             break;
//         case 'R':
//             alert(`Saliste del programa`);
//             break;
//             break;
//         default:
//             alert("No escogiste ninguna letra valida")
//             break;
//     }
// } while (letra != letraSalir);

for(let i = 1; i<= 10;i++){
    console.log(Math.ceil(Math.random()*10));
}