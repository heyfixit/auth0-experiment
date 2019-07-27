const restricted = require('../middleware/restricted');
const users = require('./users');
const messages = require('./messages');

module.exports = server => {
  server.use('/api/users', users);
  server.use('/api/messages', messages);
};
