function calculateDiscount (discount , price) {
return price - discount;
}


function showReceipt (){
    let finalPrice= calculateDiscount(5,10);
    return finalPrice
}
console.log(`المبلغ الإجمالي للدفع هو: ${showReceipt()}`)


// ---------------------------------------------------- refacor this ?
function checkAccess(isLoggedIn, isBanned, role) {
  if (isLoggedIn === true && isBanned === false && role === "admin") {
    if (isBanned === false) {
      if (role === "admin") {
        return "مرحباً بك في لوحة تحكم الإدارة";
      } else if (role === "user") {
        return "مرحباً بك في ملفك الشخصي";
      } else {
        return "صلاحية غير معروفة";
      }
    } else {
      return "حسابك محظور من المنصة";
    }
  } else {
    return "الرجاء تسجيل الدخول أولاً";
  }
}
// --------------------------------------------------first
function checkAccess(isLoggedIn, isBanned, role) {
  if (isLoggedIn === true && isBanned === false && role === "admin") {
        return "مرحباً بك في لوحة تحكم الإدارة";
  }
  
  if (isBanned === true){
      return "حسابك محظور من المنصة";
    }
    else if (isBanned === false || role === "user") {
          return "مرحباً بك في ملفك الشخصي";
        }
    return "الرجاء تسجيل الدخول أولاً";
}
// -------------------------------------- second
function checkAccess(isLoggedIn, isBanned, role) {
  if (isLoggedIn === true && isBanned === false && role === "admin" || role === "user") {
        return role === "admin" ? "مرحباً بك في لوحة تحكم الإدارة" : "مرحباً بك في ملفك الشخصي";
  }
  
  if (isBanned === true){
      return "حسابك محظور من المنصة";
    }
    return "الرجاء تسجيل الدخول أولاً";
}
// ------------------------the best whay
function checkAccess(isLoggedIn, isBanned, role) {
if (!isLoggedIn) return "الرجاء تسجيل الدخول أولاً"
if (isBanned)    return "حسابك محظور من المنصة";
if (role === "admin") return "مرحباً بك في لوحة تحكم الإدارة"
if (role === "user") return "مرحباً بك في ملفك الشخصي"
return "الرجاء تسجيل الدخول أولاً";
}
// ------------------------------------ 
// function callManager(){
//     console.log("aproved");
// }
// function callSecrtary(){
//     console.log("not arrived yet")
// }
// function ask (isArrive){
//     if (isArrive = true) return callManager();
//     return callSecrtary();
// }
// ask(true);

// ------------------------------another way and more pro using callback 
function callManager(){
    console.log("aproved");
}
function callSecrtary(){
    console.log("not arrived yet")
}
function ask (isArrive , showSucess , showError){
    if (isArrive = true) return showSucess;
    return showError;
}
ask(true ,callManager(),callSecrtary());

// ---------------------------------------------Arrow function
// let sendWelcomeEmail = function(userName) {
//   return "تم إرسال رسالة الترحيب إلى: " + userName;
// };

let sendWelcomeEmail = userName => `تم إرسال رسالة الترحيب إلى: ${userName}`;

sendWelcomeEmail("akrm");
// ---------------------------------------------odin project assignment
function add7 (num) {
 return num+7;
}
console.log(add7(10));

let multiply = (num1 , num2) => num1 * num2;
console.log(multiply(2,3));

function capitalize(text) {
  let firstLetter = text[0].toUpperCase();
  let restOfString = text.slice(1).toLowerCase();
  return firstLetter+restOfString
}

function lastLetter(text2){
  let lastLetter = text.lenght - 1;
  return text2[lastLetter];
}

// -----------------------------------------ai challange
function addNumbersA(a, b) {
  return a + b;
}

let resultA = addNumbersA(5, 5);
let finalA = resultA * 2;

console.log(finalA)