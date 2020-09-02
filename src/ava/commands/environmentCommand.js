const object = { keyword: 'office', command: 'OBJECT' };
const action = { keyword: ['status', 'check', 'how'], command: 'ACTION' };
class EnvironmentCommand {
  constructor() {}

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  async parse(phrase) {
    const objectIndex = phrase.indexOf(object.keyword);
    if (objectIndex > -1) {
      const actionMatch = action.keyword.filter((w) => phrase.includes(w));
      if (actionMatch.length > 0) {
        const temperature = `The temperature in the office is ${this.randomInt(22, 28)} degrees.`;
        const lights = `${this.randomInt(30, 90)}% of the lights are on.`;
        const doors = `All doors are locked.`;

        return {
          success: true,
          message: `Temperature: ${temperature} - Lights: ${lights} - doors: ${doors}`,
        };
      }
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return 'office';
  }
}

module.exports = EnvironmentCommand;
