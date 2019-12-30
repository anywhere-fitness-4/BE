const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  add,
  deleteUser
};

function get() {
  return db('users')
    .select('id', 'username', 'password');
};

function getBy(filter) {
  return db('users')
    .where(filter)
    .first();
};

function getById(id) {
  return db('users')
    .where({ id })
    .first();
};

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return getById({ id })
    });
};

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
};