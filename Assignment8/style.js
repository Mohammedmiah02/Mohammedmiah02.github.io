


console.log('PromptA_Version2');

var DayTime = prompt('Please enter: 1 , 2, or 3 to pick a meal' );


const brkf = 1
const lnch = 2
const dnnr = 3



if ( DayTime <= 2){
    
    console.log('Coffee + bagel + sandwhich');

}

else if (timeDay == 3  ){
    
    console.log('RastaPasta');

}

else {
    
    console.log('Please try again, order not understood');

}







// B1
console.log('QuestionB_Part1');

// food = prompt('Please enter: breakfast, lunch, or dinner' ).toLowerCase();

function    ThePeoplesFood(StarterMeal){
   
    return StarterMeal/4 
}

function ThePeoplesTime(StarterTime){

    return StarterTime/4
}


function microwave(TheFoodWeight, time, mode){

    const FoodForPeople = ThePeoplesFood(TheFoodWeight)
    const TimeForPeople= ThePeoplesTime(time)
    
   
    // To Test:
    // console.log(TheFoodWeight, time, mode);

    const readyToEat =  
    (`Your total food weight is: ${TheFoodWeight}
    It may be shared with 4 people for ${FoodForPeople}lb per person,
    Total time for heading you food is ${TimeForPeople} mins, each person should cook their food about ${TimeForPeople} min under ${mode} mode.`);
    return DiveIn);
}

const food = microwave(2, 4, 'LOW')

console.log(food)








// B2
console.log(QuestionB2);

const bill = 28;

// formula
const tip1 = bill * 15 /100;
const tip2 = bill * 20 /100;

bill >= 50 && bill <= 300 ? console.log(`The bill is $${bill}, and your tip should be 15% or $${tip1}, a Total of $${bill + tip1} dollars`): 
console.log(`The bill is $${bill}, and your tip should be 20% or $${tip2}, a Total of $${bill + tip2} dollars `);







// D

console.log('D.');


function CelsiusToFahrenheitConverter() {
    const celsius= 40;
    const fahrenheitCalculation = (celsius * 9/5) + 32 
    console.log(`Celsius is ${cTemp}°C and the output in fahrenheit is ${fahrenheitCalculation}°F `);
}

CelsiusToFahrenheitConverter()



function FahrenheitToCelsiusConverter() {

    const fahrenheit = 40;

    const CelsiusCalculation = ((fahrenheit - 32) * 5/9).toFixed(2)
    console.log(`Celsius is ${fahrenheit}°F and the output in fahrenheit is ${CelsiusCalculation}°C `);
}

FahrenheitToCelsiusConverter()