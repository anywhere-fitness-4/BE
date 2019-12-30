
exports.seed = function(knex) {
  return knex('roles')
    .truncate()
    .then(function () {
      return knex('roles').insert([
        {id: 1, role: 'instructor'},
        {id: 2, role: 'client'}
      ]);
    });
};
