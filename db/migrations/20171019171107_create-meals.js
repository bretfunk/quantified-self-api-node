
exports.up = function(knex, Promise) {
  let createMealsTable  = `CREATE TABLE meals(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  )`

  knex.raw(createMealsTable)
}

exports.down = function(knex, Promise) {
  let dropMealsTable = 'DROP TABLE meals'

  knex.raw(dropMealsTable)
}
