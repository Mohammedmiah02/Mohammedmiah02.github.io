
// A

// 1. Lucas's and John's mass and height in variables
let first_user = 'Lucas'
let first_user_Weight = 78
let first_user_Height = 1.69

let second_user= 'Jhon'
let second_user_Weight = 92
let second_user_Height = 1.95


// 2. Calculate both their BMIs using the formula
let mass1 = first_user_Weight
let height1 = first_user_Weight
const bmiFormula1 = mass1 / (height1 ** 2)
const lucasBmi = Number((bmiFormula1).toFixed(3));
console.log(`This is Lucas total BMI ${lucasBmi}`);
// extra
document.getElementById("lucasBmi").innerHTML = `Lucas total BMI: ${lucasBmi}`;


let mass2 = second_user_Weight
let height2 = second_user_Weight
const bmiFormula2 = mass2 / (height2 ** 2)
const jhonBmi = Number((bmiFormula2).toFixed(3))
console.log(`This is Jhon's total BMI ${jhonBmi}`);
document.getElementById("jhonBmi").innerHTML = `Lucas total BMI: ${jhonBmi}`;

// 4. Create a Boolean variable 'lucasHigherBMI'

if (lucasBmi > jhonBmi){
        console.log('Lucas has higher bmi than Jhon');
} else {
        console.log('Lucas bmi is lower than Jhon');
}

document.getElementById("bmiResults").innerHTML = `Lucas has a higher BMI ${jhonBmi} than  ${second_user}`;

// B
// The Temperature Converter

const fahrenheit = 60;
const celsius = 20;

// Formula to convert F to C 
const formula_fahrenheit = Number(((fahrenheit - 32) * 5/9).toFixed(1));
// Formula to convert C to F 
const formula_celsius = (celsius * 9/5) + 32;

console.log(`Fahrenheit to Celsius: Input - ${fahrenheit}F is equals to ${formula_fahrenheit}C`);
console.log(`Celsius to Fahrenheit: Input - ${celsius}C is equals to ${formula_celsius}F`);

document.getElementById("ftoc").innerHTML = `${fahrenheit}F is equals to ${formula_fahrenheit}C`;
document.getElementById("ctof").innerHTML = `${celsius}C is equals to ${formula_celsius}F`;



// C
const Team_1 = 'Nets'
const Team_2 = 'Knicks'




const Nets_Scores = [97,112, 101]
const Knicks_Scores = [109,95, 123]




const Nets_total_Points = 97 + 112 + 101
const Knicks_Total_Points = 109 + 95 + 123


// Formula for averaging
var AvgScore_Nets = Number(((Nets_total_Points / Nets_Scores.length)).toFixed(2)) 
var AvgScore_Knicks = Number(((Knicks_Total_Points / Knicks_Scores.length)).toFixed(2))


// Deciding the Winner

if (AvgScore_Nets > AvgScore_Knicks){
    console.log(`The winner for this match is the ${Team_1} with a average score of ${AvScore_Nets} points`);
}
else if (AvgScore_Nets < AvgScore_Knicks){
    console.log(`The winner for this match is the ${Team_2} with a average score of ${Avgscore_Knicks} points`);
}
else if (AvgScore_Nets == AvgScore_Knicks) {
    console.log(`Its a draw!: The Average Scores are ${Team_1} = ${AvgScore_Nets} and ${Team_2} = ${Avgscore_Knicks} `);
}

document.getElementById("avg1").innerHTML = `${Team_1} average score : ${AvgScore_Nets}`;
document.getElementById("avg2").innerHTML = `${Team_2} average score : ${AvgScore_Knicks}`;


document.getElementById("result2").innerHTML = `Congratulations!! The ${Team_2} has won with ${AvgScore_Knicks} points`;





// Bonus 1: 



