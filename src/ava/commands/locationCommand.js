const object = { keyword: "find", command: "OBJECT" };
const action = { keyword: "create", command: "ACTION" };
const connector = { keywords: ["to", "for", "because"] };
// este commando deberia responder cuando alguien pregunta donde se encuentra una persona o lugar: where is the bathroom, where is Sebastian Ordiz
class LocationCommand {
  constructor() {}

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  parse(phrase) {
    const objectIndex = phrase.indexOf(object.keyword);
    if (objectIndex > -1) {
      const index = phrase.indexOf(object.keyword) + object.keyword.length;
      const content = phrase.substring(index, phrase.length);
      const floorLocation = this.randomInt(7, 8);
      const seatPosition = this.randomInt(0, 60);
      return {
        success: true,
        message: `${content} is located in floor: ${floorLocation}, position: ${seatPosition}  `
      };
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return `${object.keyword}`;
  }
}

module.exports = LocationCommand;
