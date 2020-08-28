const object = { keyword: 'check', command: 'OBJECT' };
const action = { keyword: 'create', command: 'ACTION' };
const connector = { keywords: ['to', 'for', 'because'] };
// este commando deberia responder cuando alguien pide chequear la oficina: check the office status
class LocationCommand {
  constructor() {}

  parse(phrase) {
    console.log('parsing');
    const objectIndex = phrase.indexOf(object.keyword);
    console.log(objectIndex);
    if (objectIndex > -1) {
      const actionIndex = phrase.indexOf(action.keyword);
      if (actionIndex > -1) {
        const index = phrase.indexOf(object.keyword) + object.keyword.length;
        console.log(index);
        console.log(phrase.length);
        const content = phrase.substring(index, phrase.length);
        console.log(content);
        return { success: true, message: `ticket was created with content "${content.trim()}"` };
      }
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return 'ticket';
  }
}

module.exports = TicketCommand;
