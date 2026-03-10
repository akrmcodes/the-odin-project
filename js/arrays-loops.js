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

const activeDebts = todayDebts.filter (debt => debt > 0);

const updatedDebts = todayDebts.map(debt => debt + 200);

console.log(updatedDebts);
console.log(activeDebts);