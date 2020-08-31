const object = { keyword: 'office', command: 'OBJECT' };
const action = { keyword: ['status', 'check', 'how'], command: 'ACTION' };
const connector = { keywords: ['to', 'for', 'because'] };
// este commando deberia responder cuando alguien pide chequear la oficina: check the office status
class EnvironmentCommand {
  constructor() {}

  async parse(phrase) {
    console.log('parsing');
    const objectIndex = phrase.indexOf(object.keyword);
    console.log(objectIndex);
    if (objectIndex > -1) {
      console.log(action.keyword);
      const actionMatch = action.keyword.filter((w) => phrase.includes(w));
      console.log(actionMatch);
      if (actionMatch.length > 0) {
        const temperature = `The temperature in the office is 24 degrees.`;
        const lights = `70% of the lights are on.`;
        const doors = `All doors are locked.`;

        return { success: true, message: `Temperature: ${temperature} - Lights: ${lights} - doors: ${doors}` };
      }
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return 'office';
  }
}

module.exports = EnvironmentCommand;
