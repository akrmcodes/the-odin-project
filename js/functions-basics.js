function calculateDiscount (discount , price) {
return price - discount;
}


function showReceipt (){
    let finalPrice= calculateDiscount(5,10);
    return finalPrice
}
console.log(`المبلغ الإجمالي للدفع هو: ${showReceipt()}`)


// ----------------------------------------------------
