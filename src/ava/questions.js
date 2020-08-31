const TicketCommand = require('./commands/ticketCommand');
const EnvironmentCommand = require('./commands/environmentCommand');
//Agregar los keywords que necesita cada comando
module.exports = { keywords: [new TicketCommand().getKeyword(), new EnvironmentCommand().getKeyword()] }; // dos kywords
