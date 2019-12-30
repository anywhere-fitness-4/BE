
exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, name: 'Joe', role_id: 1},
        {id: 2, name: 'Tom', role_id: 2},
        {id: 3, name: 'Theo', role_id: 2}
      ]);
    });
};
