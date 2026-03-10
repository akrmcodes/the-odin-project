let dailyDebts = [4000, 0, 2500, 0, 1500, 60000, 3000];

let allDebts =0;

const skipedDebts = 0;
const suspiciousNumber = 50000;

for (i=0 ; i<dailyDebts.length ;i++) {
    if(dailyDebts[i] === skipedDebts) {
        console.log("تم تخطي حساب مسدد")
        continue;
    }
    else if(dailyDebts[i] >= suspiciousNumber) {
        console.log("تحذير: تم إيقاف الجرد لوجود رقم مشبوه!")
        break;
    }
    else {
        allDebts +=dailyDebts[i];
    }
}
console.log(allDebts)