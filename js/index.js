let number = document.getElementById("number");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
+

plus.addEventListener("click", () => {

    alert("Hola!");
    
    number.value = (parseInt(number.value) + 1);
});