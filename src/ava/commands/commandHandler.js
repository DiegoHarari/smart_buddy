const TicketCommand = require('./ticketCommand');
const EnvironmentCommand = require('./environmentCommand');

async function executeCommand(matches, question) {
  const ticketCommand = new TicketCommand();
  const environmentCommand = new EnvironmentCommand();
  console.log(matches);
  console.log(question);
  if (matches.indexOf(ticketCommand.getKeyword()) > -1) {
    const response = await ticketCommand.parse(question);
    return response;
  }

  if (matches.indexOf(environmentCommand.getKeyword()) > -1) {
    const response = await environmentCommand.parse(question);
    return response;
  }
  //agregar los ifs para matchear los demas commands
}

module.exports = {
  executeCommand,
};
