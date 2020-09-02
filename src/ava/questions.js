const TicketCommand = require('./commands/ticketCommand');
const EnvironmentCommand = require('./commands/environmentCommand');
const LocationCommand = require('./commands/locationCommand');
const TransportCommand = require('./commands/transportCommand');

module.exports = {
  keywords: [
    new TicketCommand().getKeyword(),
    new EnvironmentCommand().getKeyword(),
    new LocationCommand().getKeyword(),
    new TransportCommand().getKeyword(),
  ],
};
