const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

const all = () => {
  return database.raw(`SELECT m.id, m.name, f.id as food_id, f.name as food_name, f.calories
         FROM meals m
         INNER JOIN meal_foods mf
         ON mf.meal_id = m.id
         INNER JOIN foods f
         ON mf.food_id = f.id
         GROUP BY m.id, f.id
         ORDER BY m.id`)
}

const find = (id) => {
  return database.raw(`SELECT id, name FROM meals WHERE id = ?`, [id])
}

const foods = (id) => {
  return database.raw(`SELECT f.id, f.name, f.calories FROM foods f
                INNER JOIN meal_foods mf ON mf.food_id = f.id
                WHERE mf.meal_id = ?`, [id])
}

module.exports = {
  all,
  find,
  foods
}
