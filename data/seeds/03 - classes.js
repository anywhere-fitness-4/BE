
exports.seed = function(knex) {
  return knex('classes')
    .truncate()
    .then(function () {
      return knex('classes').insert([
        {id: 1, name: 'quick-kicks', type: 'kickboxing', class_date: '1/5/20', start_time: '12:00', duration: 1, intensity: 'high', location: 'main-room', number_of_attendees: 18, max_attendees: 25},

        {id: 2, name: 'race', type: 'cardio', class_date: '1/6/20', start_time: '1:00', duration: 1.5, intensity: 'high', location: 'cardio-room-02', number_of_attendees: 21, max_attendees: 25},

        {id: 3, name: 'jump-start', type: 'cardio', class_date: '1/15/20', start_time: '8:00', duration: 1, intensity: 'medium', location: 'cardio-room-04', number_of_attendees: 25, max_attendees: 25}
      ]);
    });
};
