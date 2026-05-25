"use strict";

const { getPlayer } = require("../src/player-service");

describe("NBA Player Lookup", () => {

  test("returns player data correctly", async () => {

    const player = await getPlayer("LeBron James");

    expect(player.team).toBe("Los Angeles Lakers");

  });

  test("returns correct position", async () => {

    const player = await getPlayer("Stephen Curry");

    expect(player.position).toBe("Guard");

  });

  test("throws error when player does not exist", async () => {

    await expect(getPlayer("Unknown Player"))
      .rejects
      .toThrow("Player not found");

  });

  test("returns correct player name", async () => {

    const player = await getPlayer("Giannis Antetokounmpo");

    expect(player.name).toBe("Giannis Antetokounmpo");

  });

});