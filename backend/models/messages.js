const db = require('../data/db');

const find = () => db('messages');

const get = async () => await find();

const getById = async id =>
  await find()
    .where({ 'messages.id': id })
    .first();

const insert = async message =>
  await db('messages')
    .insert(message, 'id')
    .then(ids => getById(ids[0]));

module.exports = {
  get,
  getById,
  insert
};
