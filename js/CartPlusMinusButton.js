export let renderCartPlusMinusButton = () => {
   
    let plusbuttons = document.querySelectorAll(".plus-minus-button-plus");
    let minusbuttons = document.querySelectorAll(".plus-minus-button-minus");
        
    plusbuttons.forEach(pluscount => {
       pluscount.addEventListener("click", () => {
            let amount = pluscount.closest(".resume-plus-minus-button").querySelector(".amount");
            if (amount.value < parseInt(amount.dataset.max)) {
                amount.value++;
            }
        });
    });
  
    minusbuttons.forEach(minuscount => {
        minuscount.addEventListener("click", () => {
            let amount = minuscount.closest(".resume-plus-minus-button").querySelector(".amount");
            if (amount.value >  parseInt(amount.dataset.min)) {    
                amount.value--;
            }
        });
    });

}