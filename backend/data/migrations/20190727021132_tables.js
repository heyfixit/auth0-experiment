exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 128);
      tbl.string('auth0_id', 255);
    })
    .createTable('messages', tbl => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .nullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('text', 255).notNullable();
    });
};

exports.down = function(knex, Promise) {};
