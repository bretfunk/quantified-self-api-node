
exports.up = function(knex, Promise) {
  let createMealFoodsTable = `CREATE TABLE meal_foods(
    id SERIAL PRIMARY KEY NOT NULL,
    meal_id INTEGER REFERENCES meals(id),
    food_id INTEGER REFERENCES foods(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  )`

 return knex.raw(createMealFoodsTable)
}

exports.down = function(knex, Promise) {
  let dropMealFoodsTable = 'DROP TABLE meal_foods'

  return knex.raw(dropMealFoodsTable)
}
