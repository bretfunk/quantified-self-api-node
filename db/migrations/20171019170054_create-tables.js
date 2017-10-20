
exports.up = (knex, Promise) => {
  let createFoodsTable = `CREATE TABLE foods(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT,
    calories INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  )`

  return knex.raw(createFoodsTable)
}

exports.down = (knex, Promise) => {
  let dropFoodsTable = 'DROP TABLE foods'

  return knex.raw(dropFoodsTable)
}
