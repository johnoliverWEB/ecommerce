export let renderPlusMinusButton = () => {

    let amount = document.getElementById("amount");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    
    plus.addEventListener("click", () => {

        if (amount.value < parseInt(amount.dataset.max)) {
            amount.value++;
        }
    });

    minus.addEventListener("click", () => {
        if (amount.value >  parseInt(amount.dataset.min)) {    
            amount.value--;
        }
    });
    
}