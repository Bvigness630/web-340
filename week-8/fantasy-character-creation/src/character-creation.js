"use strict";

const { readFile, writeFile } = require("fs").promises;
const path = require("path");

const CHARACTER_FILE = path.join(__dirname, "character.json");

async function writeCharacter(character) {
  const filePath = CHARACTER_FILE;

  const data = JSON.stringify(character);

  await writeFile(filePath, data, "utf8");

  return true;
}

async function readCharacter(fileName = CHARACTER_FILE) {
  const filePath = path.isAbsolute(fileName)
    ? fileName
    : path.join(__dirname, path.basename(fileName));

  try {
    const data = await readFile(filePath, "utf8");

    return JSON.parse(data);
  } catch (err) {
    throw new Error("Character file does not exist");
  }
}

module.exports = {
  CHARACTER_FILE,
  writeCharacter,
  readCharacter
};