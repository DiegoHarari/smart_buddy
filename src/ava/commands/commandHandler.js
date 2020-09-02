const TicketCommand = require('./ticketCommand');
const EnvironmentCommand = require('./environmentCommand');
const LocationCommand = require('./locationCommand');
const TransportCommand = require('./transportCommand');

async function executeCommand(matches, question) {
  const ticketCommand = new TicketCommand();
  const environmentCommand = new EnvironmentCommand();
  const locationCommand = new LocationCommand();
  const transportCommand = new TransportCommand();

  if (matches.indexOf(ticketCommand.getKeyword()) > -1) {
    const response = await ticketCommand.parse(question);
    return response;
  }

  if (matches.indexOf(environmentCommand.getKeyword()) > -1) {
    const response = await environmentCommand.parse(question);
    return response;
  }

  if (matches.indexOf(locationCommand.getKeyword()) > -1) {
    const response = await locationCommand.parse(question);
    return response;
  }

  if (matches.indexOf(transportCommand.getKeyword()) > -1) {
    const response = await transportCommand.parse(question);
    return response;
  }
}

module.exports = {
  executeCommand,
};
