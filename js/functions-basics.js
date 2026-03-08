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