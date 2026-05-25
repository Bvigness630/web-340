"use strict";

const { getPlayer } = require("./src/player-service");

async function displayPlayer(name) {

  try {

    const player = await getPlayer(name);

    console.log("NBA Player Information");
    console.log("----------------------");
    console.log(`Name: ${player.name}`);
    console.log(`Team: ${player.team}`);
    console.log(`Position: ${player.position}`);

  } catch (err) {

    console.error("Error:", err.message);

  }

}

// Example call
displayPlayer("Stephen Curry");