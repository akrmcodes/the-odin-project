const x= function (z){
   const w = "Hello ";
return w +  z

 }

x("John");
// --------------------------------
function sayHi (name) {
    const hi ="Hello"
    return name +hi
}
sayHi("akrm")

// -------------------------------
// دالة تحسب الفاتورة
function calc(x, y) {
if(x >= 10000)
return x + y - 500;
else
return x + y;
}

let a = 12000; // حساب المشتريات
let b = 1000; // ضريبة مضافة
let p = true; // هل العميل زبون دائم؟

if (p === true)
console.log(calc(a, b));
// --------------------------
let purchaseAccount =1200;
let addedTax=1000;
let isCustomer = true;
const discountAmount = 500;
function calculateInvoice(boughtItmes,Tax) {
    const finalAccount = boughtItmes + Tax;
    if(boughtItmes >= 10000){
        return finalAccount - discountAmount; 
    }
    else {
        return finalAccount;
    }
}
let invoice = calculateInvoice(purchaseAccount,addedTax);
if (isCustomer) {
    console.log(invoice)
}