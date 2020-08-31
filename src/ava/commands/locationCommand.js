const object = { keyword: "where", command: "OBJECT" };
const action = { keyword: "create", command: "ACTION" };
const connector = { keywords: ["to", "for", "because"] };
// este commando deberia responder cuando alguien pregunta donde se encuentra una persona o lugar: where is the bathroom, where is Sebastian Ordiz
class LocationCommand {
  constructor() {}

  parse(phrase) {
    const objectIndex = phrase.indexOf(object.keyword);
    if (objectIndex > -1) {
      const actionIndex = phrase.indexOf(action.keyword);
      if (actionIndex > -1) {
        const index = phrase.indexOf(object.keyword) + object.keyword.length;
        const content = phrase.substring(index, phrase.length);
        return {
          success: true,
          message: `ticket was created with content "${content.trim()}"`
        };
      }
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return "ticket";
  }
}

module.exports = TicketCommand;
