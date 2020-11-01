/**
Coding Challenge #2
    Use the BMI example from Challenge #1, and the code you already wrote, and
    improve it.
Your tasks:
    1.  Print a nice output to the console, saying who has the higher BMI. The message
        is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
        BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK
*/

// Storing Marks Weight and Height
const intMarkWeight = 78;
const dblMarkHeight = 1.69;

// Storing Johns Weight and Height
const intJohnWeight = 92;
const dblJohnHeight = 1.95;

// Calulate BMI index for Mark
const dblMarkBMI = calculateBMI(intMarkWeight, dblMarkHeight);

// Calculate BMI index for John
const dblJohnBMI = calculateBMI(intJohnWeight, dblJohnHeight);

// Whos BMI is higher
if (dblMarkBMI > dblJohnBMI) {
  console.log(`Mark's BMI is higher than John by ${dblMarkBMI - dblJohnBMI}`);
} else {
  console.log(`John's BMI is higher than Mark by ${dblJohnBMI - dblMarkBMI}`);
}

function calculateBMI(intMass, dblHeight) {
  return intMass / dblHeight ** 2;
}
