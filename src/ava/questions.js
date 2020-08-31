const TicketCommand = require("./commands/ticketCommand");
const EnvironmentCommand = require("./commands/environmentCommand");
const LocationCommand = require("./commands/locationCommand");
//Agregar los keywords que necesita cada comando
module.exports = {
  keywords: [
    new TicketCommand().getKeyword(),
    new EnvironmentCommand().getKeyword(),
    new LocationCommand().getKeyword()
  ]
}; // dos kywords
