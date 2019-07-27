const db = require('../data/db');

const find = () => db('users');

const get = async () => await find();

const getById = async id =>
  await find()
    .where({ 'users.id': id })
    .first();

const insert = async user =>
  await db('users')
    .insert(user, 'id')
    .then(ids => getById(ids[0]));

module.exports = {
  get,
  getById,
  insert,
  find
};
