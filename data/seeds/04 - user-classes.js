
exports.seed = function(knex) {
  return knex('user_classes')
    .truncate()
    .then(function () {
      return knex('user_classes').insert([
        {user_id: 1, class_id: 1},
        {user_id: 1, class_id: 3},
        {user_id: 2, class_id: 1},
        {user_id: 2, class_id: 3},
        {user_id: 3, class_id: 1},
        {user_id: 3, class_id: 2}
      ]);
    });
};
