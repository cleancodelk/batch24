"use strict";

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/* 1) Understanding the problem
- What is temp amplitude? Answer: difference between highest and lowest temp

/* 2) Breaking up into sub-problems
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it */

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let max = temps[0];
let min = temps[0];
const calcTempAmplitude = function (temps) {
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    // Ignore errors
    if (typeof curTemp !== "number") continue;

    if (max > curTemp) max = curTemp;
    if (min < curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
