const TicketCommand = require('./ticketCommand');

function executeCommand(matches, question) {
  const ticketCommand = new TicketCommand();
  console.log(matches);
  console.log(question);
  if (matches.indexOf(ticketCommand.getKeyword()) > -1) {
    const ticketCommand = new TicketCommand();
    const response = ticketCommand.parse(question);
    return response;
  }
  //agregar los ifs para matchear los demas commands
}

module.exports = {
  executeCommand,
};
