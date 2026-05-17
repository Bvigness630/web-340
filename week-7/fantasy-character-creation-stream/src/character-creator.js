"use strict";

const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({ ...options, decodeStrings: false });

    // Shared instance-level variable added by the AI.
    // Because this value gets reused between writes,
    // it may cause old or incorrect character data to appear.
    this.lastChar = null;
  }

  _write(chunk, encoding, callback) {
    try {
      if (!chunk) {
        const err = new Error("Empty input.");
        this.emit("error", err);
        return callback(err);
      }

      const input = typeof chunk === "string"
        ? JSON.parse(chunk)
        : chunk;

      // Store most recently processed character
      this.lastChar = {
        class: input.class,
        gender: input.gender,
        funFact: input.funFact
      };

      // The async delay changes the timing of when data is pushed.
      // Since multiple writes can happen close together,
      // the shared variable may get overwritten before output is sent.
      setTimeout(() => {
        try {
          // Reuse the stored character instead of the current chunk
          const formatted =
            `Class: ${this.lastChar.class}\n` +
            `Gender: ${this.lastChar.gender}\n` +
            `Fun Fact: ${this.lastChar.funFact}\n`;

          this.push(formatted);
          callback();
        } catch (err) {
          this.emit("error", err);
          callback(err);
        }
      }, Math.floor(Math.random() * 20) + 5); // small async delay
    } catch (err) {
      this.emit("error", err);
      callback(err);
    }
  }

  _read() {}
}

// Tests started behaving inconsistently after the refactor.
// Some runs pass while others fail, which suggests
// timing issues and shared state problems inside the stream.

module.exports = { CharacterCreator };
