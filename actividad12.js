// let operador = prompt("operadores");
// resultado = eval(operador);
// console.log(resultado);


function comprobar(){

    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
    
}
