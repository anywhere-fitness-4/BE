const db = require('../data/dbConfig');

module.exports = {
  get,
  getBy,
  getById,
  add,
  deleteUser,

  getClasses,
  getByClasses,
  getByIdClasses,
  addClass,
  editClass,
  deleteClass,
};

// Users
function get() {
  return db('users')
    .select('id', 'username', 'password', 'role_id');
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


// classes
function getClasses() {
  return db('classes')
};

function getByClasses(filter) {
  return db('classes')
    .where(filter)
    .first()
};

function getByIdClasses(id) {
  return db('classes')
    .where({ id })
    .first()
};

function addClass(classes) {
  return db('classes')
    .insert(classes)
    .then(ids => {
      const [id] = ids
      return getByIdClasses({ id })
    })
};

function editClass(changes, id) {
  return db('classes')
    .where({ id })
    .update(changes, '*')
};

function deleteClass(id) {
  return db('classes')
    .where({ id })
    .del()
};