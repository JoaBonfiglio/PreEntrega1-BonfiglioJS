let nombreIngresado   = prompt("Ingresar nombre de usuario");
let apellidoIngresado = prompt("Ingresar apellido de usuario");

if((nombreIngresado ==="") && (apellidoIngresado ==="")){
    alert("datos incorrectos");
}   else{
    alert("Nombre: "+ nombreIngresado +"\nApellido: "+ apellidoIngresado); 
}



const calcularIva = valorProducto => valorProducto * 0.21 

const  calcularValorProducto = valor => {
    console.log(valor)
    return valor + calcularIva(valor)
}

console.log(calcularValorProducto(4600))



