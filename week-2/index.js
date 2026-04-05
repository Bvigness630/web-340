/**
 * Author: BOyd Vigness
 * Date: 4/5/2026
 * File Name: index.js
 * Description:
*/

// Import module using require
const recipes = require("./recipes");

// Demonstrate functionality
console.log(recipes.createRecipe(["eggs", "milk", "flour"]));
console.log(recipes.setTimer(10));
console.log(recipes.quit());