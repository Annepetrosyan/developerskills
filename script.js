// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 10;
// if ((x = 10)) {
//   console.log("10");
// }
// console.log("Anna");

// console.log("Anna");
// const calcAge = (birthYear) => 2023 - birthYear;
// console.log(calcAge(1998));

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//amplitute is difference between lowest and highest temp
// compute max and min temp
// ? sensor error and ? to do
//--ignore sensore errors
//-- find max value
// -- find min value
//-- subtracte min from max and return value

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  //   console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 4, 8, 9, 5, 6, -1]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
