var weight = 70;  // kg
var height = 1.75; // meters

// Calculate BMI
var bmi = weight / (height * height);
console.log("Your BMI is:", bmi.toFixed(2)); // Rounded to 2 decimal places

// BMI Categories
if(bmi < 18.5){
    console.log("You are underweight.");
} 
else if(bmi >= 18.5 && bmi < 24.9){
    console.log("You have a normal weight.");
} 
else if(bmi >= 25 && bmi < 29.9){
    console.log("You are overweight.");
} 
else{
    console.log("You are obese.");
}


// Using Ternary Operator for BMI Category
var bmiCategory = (bmi < 18.5) ? "Underweight" :
                  (bmi >= 18.5 && bmi < 24.9) ? "Normal weight" :
                  (bmi >= 25 && bmi < 29.9) ? "Overweight" : "Obese";

console.log("BMI Category (Ternary):", bmiCategory);
