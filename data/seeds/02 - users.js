const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Joe', password: bcrypt.hashSync('123', 8), role_id: 1},
        {id: 2, username: 'Tom', password: bcrypt.hashSync('123', 8), role_id: 2},
        {id: 3, username: 'Theo', password: bcrypt.hashSync('123', 8), role_id: 2}
      ]);
    });
};
