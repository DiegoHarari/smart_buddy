const object = { keyword: ['this', 'these'], command: 'OBJECT' };
const action = { keyword: 'take', command: 'ACTION' };
const connector = { keywords: 'to' };
// este commando deberia responder cuando alguien pide llevar un objeto: take this receipt to Valeria
// e.g. take this receipt to Valeria
class TransportCommand {
  constructor() {}

  parse(phrase) {
    console.log('parsing');
    const actionIndex = phrase.indexOf(action.keyword);
    
    if (actionIndex.length > -1) {
      const connectorIndex = phrase.indexOf(connector.keyword);
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
