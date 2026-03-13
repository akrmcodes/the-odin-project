// function camelize(str) {
//     str = prompt("enter a text here","webkit-transition")
//     let stringArray = str.split("")
//     let fineDash = stringArray.indexOf("-")
//     let capitalizeFirstWord = (stringArray[fineDash +1]).toUpperCase();
//     let deleteLeter = stringArray.splice(fineDash,1)
//     let stringCapitalize = stringArray.join("");
//     return console.log(stringCapitalize);
// }
// console.log(camelize("webkit-transition"))
// -----------------------------------------------------
let inputString = prompt("enter a text here","webkit-transition");
let stringArray = inputString.split("-");


function camelize(str) {
    str = inputString;
    let capitalize = stringArray.map(first => first = stringArray[1][0].toUpperCase)
                                .join("");
    return capitalize;
}
console.log(camelize())

