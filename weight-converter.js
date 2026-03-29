/**
 * Author:
 * Date:
 * File Name:
 * Description:
*/

"use strict";

// TODO: Implement the weight conversion logic here

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = args[0];

if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

// Convert to number
const poundsNum = Number(pounds);

// Convert pounds to kilograms
const kilograms = poundsNum * 0.453592;

// Output result rounded to 2 decimal places
console.log(kilograms.toFixed(2));