function divisor (num1, num2){

    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}

let number = prompt("Ingrese un número entero positivo");
if(number > 0){
if (divisor(number, 3) && !divisor(number, 5)){
    console.log (number, "🚀");
} 
if (divisor(number, 5) && !divisor(number, 3)){
    console.log (number, "🍔");
}
if (divisor(number, 3) && divisor(number, 5)){
    console.log (number, "🍻");
}
}else {
    console.log('Error');
}