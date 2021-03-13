
console.log('A');

function TipCalulation(bill){
    const billAmount = Number(bill);

    if (billAmount >= 50 && billAmount <= 300){
        return billAmount * .15;
    } else{
        return billAmount * .20;
    }

}

(calculatedTip(100));
console.log(`tip for 100 is $${calculatedTip(100)}`);

var billsData = new Array (125, 555, 44)
var tipsTotal = new Array(calculatedTip(Data_Bills[0]), calculatedTip(Data_Bills[1]), calculatedTip(Data_Bills[2]))
var totalBT = new Array(Data_Bills[0] + TotalTips[0], Data_Bills[1] + TotalTips[1],  Data_Bills[2] + TotalTips[2])

console.log(`Bill only $${Data_Bills[0]}: Bill + Tip =  $${Tot_Bill[0]}`);
console.log(`Bill only $${Data_Bills[1]}: Bill + Tip = $${Tot_Bill[1]}`);
console.log(`Bill only $${Data_Bills[2]}: Bill + Tip = $${Tot_Bill[2]}`);


//

console.log('A.2');


const john = {
    firstName: 'John',
    lastName: 'Willams',
    major: 'Marketing',
    birthYear: 1996,
    job: 'student',
    friends: ['Rafi ', ' Tanhim', ' Sebastian'],
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age
    },
   
    getSummary: function () {
        document.getElementById("getSummary").innerHTML =  `${this.firstName} ${this.lastName} is ${this.calAge()} years old ${this.job} at Baruch College, majoring in ${this.major}. 
        He has worked multiple projects with his friends ${this.friends}, and${this.hasDriverLicence ? `does`: `doesn't`} have a drivers licence yet.`;
    }
console.log(john.getSummary());




console.log('A3');


const Info_John = {
    firstName: 'John',
    lastName: 'Willams',
    mass: 85,
    height: 1.75,
    getSummary: function () {
        return `${this.firstName} ${this.lastName} total BMI is ${bmiFormula} `;
        }
}

bmiFormula = (johnsInfo.mass / (johnsInfo.height ** 2)).toFixed(2)
BMI_John = bmiFormula
document.getElementById("BMI_John").innerHTML = `John Smith's BMI is ${jhonBmi}`
console.log(johnsInfo.getSummary());


const Info_Lucas = {
    firstName: 'Lucas',
    lastName: 'Miller',
    mass: 90,
    height: 2.00,
    getSummary: function () {
        return `${this.firstName} ${this.lastName} total BMI is ${bmiFormula} `;
        }
}

bmiFormula = (lucasInfo.mass / (lucasInfo.height ** 2)).toFixed(2)
BMI_Lucas = bmiFormula
document.getElementById("BMI_Lucas").innerHTML = `Lucas Miller's BMI is ${lucasBmi}`
console.log(lucasInfo.getSummary());


if (BMI_Lucas < BMI_John){
        console.log(`${Info_John.firstName} has a Higher BMI than ${Info_Lucas.firstName}`);
        document.getElementById("higher").innerHTML = `${Info_John.firstName} has a Higher BMI than ${lucasInfo.firstName}`
} 
else {
        console.log(`${Info_Lucas.firstName} has a Higher BMI than ${Info_John.firstName}`);
        document.getElementById("lower").innerHTML = `${Info_Lucas.firstName} has a Higher BMI than ${Info_John.firstName}`
}


//
console.log('A4')


let TotBillAmt = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let TotTips = [];
let TotBillTip = [];

for (let i = 0; i < TotBillAmt.length; i ++){
    let tip = CalculatedTip(TotBillAmt[i])
    TotTips.push(` $${tip}`);
    let addition = tip + TotBillAmt[i];
    TotBillTip.push(` $${addition}`)
}

console.log(TotTips);
console.log(TotBillTip);

document.getElementById("billAmount").innerHTML = ` ${TotBillAmt}`
document.getElementById("tipPercentage").innerHTML = `${TotTips}`
document.getElementById("totalAmount").innerHTML = `${TotBillTip}`

// 1
document.getElementById("bill1").innerHTML = `$${TotBillAmt[0]}`
document.getElementById("tipA").innerHTML = `${TotTips[0]}`
document.getElementById("btip1").innerHTML = `${TotBillTip[0]}`
// 2
document.getElementById("bill2").innerHTML = `$${TotBillAmt[1]}`
document.getElementById("tipB").innerHTML = `${TotTips[1]}`
document.getElementById("btip2").innerHTML = `${TotBillTip[1]}`
// 3
document.getElementById("bill3").innerHTML = `$${TotBillAmt[2]}`
document.getElementById("tipC").innerHTML = `${TotTips[2]}`
document.getElementById("btip3").innerHTML = `${TotBillTip[2]}`
// 4
document.getElementById("bill4").innerHTML = `$${TotBillAmt[3]}`
document.getElementById("tipD").innerHTML = `${TotTips[3]}`
document.getElementById("btip4").innerHTML = `${TotBillTip[3]}`
// 5
document.getElementById("bill5").innerHTML = `$${TotBillAmt[4]}`
document.getElementById("tipE").innerHTML = `${TotTips[4]}`
document.getElementById("btip5").innerHTML = `${TotBillTip[4]}`
// 6
document.getElementById("bill6").innerHTML = `$${TotBillAmt[5]}`
document.getElementById("tipF").innerHTML = `${TotTips[5]}`
document.getElementById("btip6").innerHTML = `${TotBillTip[5]}`
// 7
document.getElementById("bill7").innerHTML = `$${TotBillAmt[6]}`
document.getElementById("tipG").innerHTML = `${TotTips[6]}`
document.getElementById("btip7").innerHTML = `${TotBillTip[6]}`
// 8
document.getElementById("bill8").innerHTML = `$${TotBillAmt[7]}`
document.getElementById("tipH").innerHTML = `${TotTips[7]}`
document.getElementById("btip8").innerHTML = `${TotBillTip[7]}`
// 9
document.getElementById("bill9").innerHTML = `$${TotBillAmt[8]}`
document.getElementById("tipI").innerHTML = `${TotTip[8]}`
document.getElementById("btip9").innerHTML = `${TotBillTip[8]}`
// 10
document.getElementById("bill10").innerHTML = `$${TotBillAmt[9]}`
document.getElementById("tipJ").innerHTML = `${TotTip[9]}`
document.getElementById("btip10").innerHTML = `${TotBillTip[9]}`
