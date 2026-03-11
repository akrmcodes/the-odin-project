let dailyDebts = [4000, 0, 2500, 0, 1500, 60000, 3000];

function calculateTotalDebts(debtsArray) {
    let allDebts = 0;
    const skippedDebt = 0;
    const suspiciousNumber = 50000;
    for (let i = 0; i < debtsArray.length; i++) {
        
        if (debtsArray[i] === skippedDebt) {
            console.log("تم تخطي حساب مسدد");
            continue;
        } 
        else if (debtsArray[i] >= suspiciousNumber) {
            console.log("تحذير: تم إيقاف الجرد لوجود رقم مشبوه!");
            break;
        } 
        else {
            allDebts += debtsArray[i];
        }
    }
        return allDebts;
}

let finalResult = calculateTotalDebts(dailyDebts);
console.log("الإجمالي السليم المعتمد: " + finalResult);
// -------------------------------------------
const todayDebts = [1500, 0, 3000, 0, 5000];

const updatedDebts = todayDebts
    .filter(debt => debt > 0)
    .map(debt => debt + 200);

console.log(updatedDebts);
// -----------------------------------

// function acceptDebt () {
//     let number = +prompt("enter the dept: it shoud be more than 100",90)
//     return number;
// }
// let debt = acceptDebt();

// let minimumDebt = 100;

// while (debt < minimumDebt && debt != null && debt !=""){
//     console.log("try again");
//     debt = acceptDebt();
// }

// // ----------------------------------------------- Ai solution
// let inputDebt; // 1. نعرف المتغير في الخارج ليكون متاحاً للشرط

// do {
//   // 2. نسأل المستخدم ونحفظ النتيجة مباشرة في المتغير
//   inputDebt = prompt("أدخل مبلغ التسديد (يجب أن يكون أكبر من 100):", "");
  
//   // 3. العجلة ستستمر في الدوران (تعيد إظهار النافذة) طالما أن الشرطين يتحققان:
//   // - الرقم المدخل أقل من أو يساوي 100
//   // - والمستخدم لم يضغط على "إلغاء" (لأن إلغاء تعني null)
//   // - والمستخدم لم يترك المربع فارغاً
// } while (inputDebt <= 100 && inputDebt !== null && inputDebt !== "");

// console.log("تمت العملية بنجاح! القيمة النهائية هي: " + inputDebt);
// ----------------------------------------------------------
let yesterdayDebts = [1000, 2500, 500, 4000, 150];
yesterdayDebts.length =2;

for(const debt of yesterdayDebts){
    console.log(debt);
}
// --------------------------------------------------------------------
let weeklyDebts = [2000, 4000, 1500, 4000, 2500];
 
weeklyDebts.splice(1,1, 2000,2000);
console.log(weeklyDebts);

let lastThree = weeklyDebts.slice(-3);
console.log(lastThree);

let sortedDebts = weeklyDebts.sort().reverse();
console.log(sortedDebts);

let newSortedDebts = weeklyDebts.sort((a,b) => b-a);

let result =0;
for(let i=0 ;i<=weeklyDebts.length-1;i++){
        result += weeklyDebts[i];
}
console.log(result)

let finalDebtResult = weeklyDebts.reduce(function (total , currentDebt){
    return total + currentDebt;
}, 0);

let finalDebt = weeklyDebts.reduce((total , currentDebt) => total + currentDebt ,0);

let ara = [1500, 200, 5000];

let sms = ara.join(" - ");
// ----------------------------------------
let numbers = [1, 2, 3, 4, 5, 6];

let debtResult = numbers
                .filter(debt => debt %2 === 0)
                .map(debt => debt * 3)
                .reduce((total,current)=>total+current,0);

console.log(debtResult);