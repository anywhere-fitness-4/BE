//          ***** built assuming 1 users table with additional info held in token for authentication *****

exports.up = function(knex) {
    return knex.schema.createTable('roles', tbl => {
        tbl.increments();
        tbl.string('role', 255)
            .notNullable();
        // tbl.boolean('instructor')
        //     .notNullable()
        //     .defaultTo(false);
    })
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 255)
            .notNullable();
        tbl.string('password', 255)
            .notNullable();
        tbl.integer('role_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('roles')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('classes', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable();
        tbl.string('type', 255)
            .notNullable();
        tbl.string('class_date', 255)
            .notNullable();
        tbl.string('start_time', 255)
            .notNullable();
        tbl.float('duration')
            .notNullable();
        tbl.string('intensity', 255)
            .notNullable();
        tbl.string('location', 255)
            .notNullable();
        tbl.integer('number_of_attendees', 255)
            .notNullable();
        tbl.integer('max_attendees', 255)
            .notNullable();
        })
    .createTable('user_classes', tbl => {
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_classes')
        .dropTableIfExists('classes')
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
};
