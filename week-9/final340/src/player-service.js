"use strict";

const players = require("./player-data");

// Async function that simulates retrieving player data
async function getPlayer(name) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      // Find player by name
      const player = players.find(
        p => p.name.toLowerCase() === name.toLowerCase()
      );

      // Handle success and failure cases
      if (player) {
        resolve(player);
      } else {
        reject(new Error("Player not found"));
      }

    }, 500);

  });

}

module.exports = {
  getPlayer
};