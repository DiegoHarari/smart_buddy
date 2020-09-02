const action = { keyword: 'take', command: 'ACTION' };
const connector = { keyword: 'to' };

class TransportCommand {
  constructor() {}

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  parse(phrase) {
    const actionIndex = phrase.indexOf(action.keyword);

    if (actionIndex > -1) {
      const connectorIndex = phrase.indexOf(connector.keyword);

      if (connectorIndex > -1) {
        const deliveryTo = phrase.substring(connectorIndex + connector.keyword.length, phrase.length);

        const objectToDeliver = phrase.substring(
          actionIndex + action.keyword.length,
          phrase.length - deliveryTo.length - connector.keyword.length
        );

        const estimatedTime = this.randomInt(5, 20);

        return {
          success: true,
          message: `I will deliver ${objectToDeliver} to ${deliveryTo}. Estimated time ${estimatedTime} minutes`,
        };
      }
    }
    return { success: false, message: "Couldn't parse" };
  }

  getKeyword() {
    return action.keyword;
  }
}

module.exports = TransportCommand;
